import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { logRequest } from "../middleware/log.js";
import { isAuthenticated } from "../middleware/auth.js";

export const userRouter = express.Router();
const sr = process.env.SALT_ROUNDS || 10;
const saltRounds = parseInt(sr);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *       properties:
 *         id:
 *           type: ObjectId
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *           description: The user's username
 *         password:
 *           type: string
 *           description: The password of the user, stored as a hash in the database
 *         email:
 *           type: string
 *           description: The email of the user
 *         date:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *       example:
 *         id: 683jjhgbalskdjfe1
 *         username: stomach-hurts
 *         password: $2%3fasdf934kng83jxsd
 *         email: stomachhurts@example.com
 *         date: 2020-03-10T04:05:06.157Z
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

/**
 * @swagger
 * /users/signup:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              email:
 *                type: string
 *    responses:
 *      200:
 *        description: Returns the newly created user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: One or more fields are missing if both email and username are missing or password is missing
 */
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

/**
 * @swagger
 * /users/signin:
 *  post:
 *    summary: Signin as this user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200:
 *        description: Returns the newly created user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                username:
 *                  type: string
 *                email:
 *                  type: string
 *      404:
 *        description: User not found
 *      400:
 *        description: One or more fields are missing if both email and username are missing or password is missing
 */
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

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: Get user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the user
 *    responses:
 *      200:
 *        description: Returns the user with matching id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: User not found
 *
 */
userRouter.get("/:id", logRequest, async (req, res) => {
  let collection = db.collection("users");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) return res.status(404).send("User not found");
  return res.status(200).send({
    id: result._id,
    username: result.username,
    email: result.email,
  });
});

userRouter.get("/", logRequest, async (req, res) => {
  let collection = db.collection("users");
  let result = await collection.find({}).toArray();
  return res.status(200).send(result);
});

/**
 * @swagger
 * /users/{id}:
 *  patch:
 *    summary: Update user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              email:
 *                type: string
 *    responses:
 *      200:
 *        description: Returns the user with matching id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: User not found
 */
userRouter.patch("/:id", logRequest, async (req, res) => {
  let collection = db.collection("users");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) return res.status(404).send("User not found");
  let newDocument = req.body;
  result = await collection.updateOne(query, { $set: newDocument });
  return res.status(200).send(newDocument);
});

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Delete user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the user
 *    responses:
 *      204:
 *        description: Returns no content, deleted successfully
 *      404:
 *        description: User not found
 */
userRouter.delete("/:id", logRequest, async (req, res) => {
  let collection = db.collection("users");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) return res.status(404).send("User not found");
  result = await collection.deleteOne(query);
  return res.status(204).send(result);
});
