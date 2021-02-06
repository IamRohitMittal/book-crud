const url='mongodb+srv://dbUser:dbPassword@cluster0.2ilt9.mongodb.net/book?retryWrites=true&w=majority';
const { MongoClient } = require("mongodb");

const client = new MongoClient(url, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("book");
  // perform actions on the collection object
  client.close();
});


async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);