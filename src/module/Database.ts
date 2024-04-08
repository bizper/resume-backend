import { MongoClient, ServerApiVersion } from "mongodb"

const uri = "mongodb+srv://bizperredi:wCwBkWkT6Eb7gBM1@leoecosphere.fq3e3ra.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}
run().catch(console.dir);

export default client.db('resume')