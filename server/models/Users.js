const ObjectId = require("mongodb").ObjectId;

class User {
  constructor(db) {
    this.collection = db.collection("users");
  }
  async addUser(user) {
    const newUser = await this.collection.insertOne(user);
    return newUser;
  }
  async findByEmail(email) {
    let query = { email: email };
    return this.collection.findOne(query);
  }
  async findByUsername(username) {
    let query = { username: username };
    return this.collection.findOne(query);
  }
  async findById(id) {
    let query = { _id: new ObjectId(id) };
    let result = await this.collection.findOne(query);
    return result;
  }
  async findAll() {
    let result = await this.collection.find({}).toArray();
    return result;
  }
  async updateUser(id, user) {
    let query = { _id: new ObjectId(id) };
    let result = await this.collection.findOne(query);
    if (!result) return false;
    let newDocument = user;
    result = await this.collection.updateOne(query, { $set: newDocument });
    return newDocument;
  }
  async deleteUser(id) {
    let query = { _id: new ObjectId(id) };
    let result = await this.collection.findOne(query);
    if (!result) return false;
    result = await this.collection.deleteOne(query);
    return true;
  }
}
module.exports = User;
