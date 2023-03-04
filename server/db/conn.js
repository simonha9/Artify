const MongoClient = require("mongodb").MongoClient;
const Users = require("../models/Users");
class MongoUtil {
  constructor() {
    const connectionString = process.env.ATLAS_URI || "";
    this.client = new MongoClient(connectionString);
  }

  async init() {
    console.log("Connecting to database...");
    await this.client.connect();
    console.log("Connected to database.");
    this.db = this.client.db("stomach-pain");
    this.Users = new Users(this.db);
  }
}

module.exports = new MongoUtil();
