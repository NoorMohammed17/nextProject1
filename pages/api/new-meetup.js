import { MongoClient } from "mongodb";

//POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    //const {title, image, address, description} = data ;
    const client = await MongoClient.connect(
      "mongodb+srv://noorshaik1798:FXX5GgX2n5mm01Dy@cluster0.s7vecnp.mongodb.net/meetups?retryWrites=true&w=majority"
    );

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
