import { Mongoclient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

let conn;
try {
  conn = await MongoClient.connect(connectionString);
} catch (e) {
  console.error(e);
}

let db = conn.db("stomach-pain");

export default db;
