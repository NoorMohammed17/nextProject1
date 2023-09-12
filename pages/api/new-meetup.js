import { MongoClient } from "mongodb";
require("dotenv").config();

const mongo_credentials = process.env.MONGO_CREDENTIALS;

//POST /api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(mongo_credentials);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data); // insertOne takes objects
    console.log(result);
    client.close();
    res.status(201);
    res.json({ message: "Meetup inserted!" });
  }
}
export default handler;
