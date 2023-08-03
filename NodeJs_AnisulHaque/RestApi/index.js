const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://Api:TR16dngaKKFYrsHs@cluster0.au8rgkx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
const userRouter = require("./routers/userRouter");
const port = 3000;
const cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function run() {
  try {
    await client.connect();

    const collection = client.db("users").collection("devices");

    app
    //routers
    app.use("/", userRouter);
    app.use("/", userRouter);
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

//apis

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
