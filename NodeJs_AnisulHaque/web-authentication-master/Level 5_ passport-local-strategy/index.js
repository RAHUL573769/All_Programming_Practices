require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(8000, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
