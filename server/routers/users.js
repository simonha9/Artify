import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { logRequest } from "../middleware/log.js";
import { isAuthenticated } from "../middleware/auth.js";

export const userRouter = express.Router();
const sr = process.env.SALT_ROUNDS || 10;
const saltRounds = parseInt(sr);

/*
User Object
{
    id: ObjectId,
    name: String,
    email: String,
    password: String,
    date: Date
}

*/

function findByEmail(email) {
  let collection = db.collection("users");
  let query = { email: email };
  return collection.findOne(query);
}
function findByUsername(username) {
  let collection = db.collection("users");
  let query = { username: username };
  return collection.findOne(query);
}

userRouter.post("/signup", logRequest, async (req, res) => {
  // Validate request body
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send("One or more fields are missing");
    return;
  }
  let collection = db.collection("users");

  // Check if user already exists
  let existingUser = await findByEmail(req.body.email);
  if (existingUser) {
    res.status(409).send("User already exists");
    return;
  }

  // Build user
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  let newDocument = req.body;
  newDocument.password = hashedPassword;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.status(200).send(newDocument);
});

userRouter.post("/signin", logRequest, async (req, res) => {
  // Validate request body
  if ((!req.body.email && !req.body.username) || !req.body.password) {
    res.status(400).send("One or more fields are missing");
    return;
  }
  let user = await findByEmail(req.body.email);
  if (!user) {
    user = await findByUsername(req.body.username);
    if (!user) return res.status(404).send("User not found");
  }
  const validPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!validPassword) {
    return res.status(401).send("Password is incorrect");
  }
  req.session.userId = user._id;
  req.session.email = user.email;
  req.session.username = user.username;
  res.status(200).send({
    id: user._id,
    username: user.username,
    email: user.email,
  });
});

userRouter.get("/:id", logRequest, async (req, res) => {
  let collection = db.collection("users");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.status(404).send("User not found");
  res.status(200).send({
    id: result._id,
    username: result.username,
    email: result.email,
  });
});

userRouter.get("/", logRequest, async (req, res) => {
  let collection = db.collection("users");
  let result = await collection.find({}).toArray();
  res.status(200).send(result);
});

userRouter.patch("/:id", logRequest, async (req, res) => {
  let collection = db.collection("users");
  let query = { _id: new ObjectId(req.params.id) };
  let newDocument = req.body;
  let result = await collection.updateOne(query, { $set: newDocument });
  res.status(200).send(newDocument);
});

userRouter.delete("/:id", logRequest, async (req, res) => {
  let collection = db.collection("users");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.deleteOne(query);
  res.status(204).send(result);
});
