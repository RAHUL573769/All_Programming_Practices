const app = require("./app");
const connectDb = require("./config/dbConnection");
const secret = require("./secret");
const PORT = secret.serverPort;
app.listen(PORT, async () => {
  console.log(`Server is Running at Port ${PORT}`);
  await connectDb();
});
