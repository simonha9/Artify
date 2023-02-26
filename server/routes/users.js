const express = require("express");
const { ObjectId } = require("mongodb");
// import requiresAuth from 'express-openid-connect';
const { auth, requiresAuth } = require("express-openid-connect");
const { Users } = require("../db/conn.js");

const userRouter = express.Router();

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

userRouter.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Login using Auth0, also covers signup and saves directly to database, recommended to do this on UI
 *    tags: [Users]
 */

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
userRouter.get("/:id", async (req, res) => {
  const result = await Users.findById(req.params.id);
  if (!result) return res.status(404).send("User not found");
  return res.status(200).send({
    id: result._id,
    username: result.username,
    email: result.email,
  });
});

userRouter.get("/", async (req, res) => {
  let result = await Users.findAll();
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
userRouter.patch("/:id", async (req, res) => {
  const result = await Users.updateUser(req.params.id, req.body);
  if (!result) return res.status(404).send("User not found");
  return res.status(200).send(result);
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
userRouter.delete("/:id", async (req, res) => {
  const result = await Users.deleteUser(req.params.id);
  if (!result) return res.status(404).send("User not found");
  return res.status(204).send(result);
});

module.exports = userRouter;
