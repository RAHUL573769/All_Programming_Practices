const { app } = require("./app");
const cors = require('cors');
const bodyParser=require("body-parser")
app.use(express.json());


app.use(cors());


app.listen(3000,(req,res)=>{

    console.log("Server is Runnig");
})