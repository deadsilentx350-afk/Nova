require("dotenv").config();
const app = require("./src/app.js")
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 5000;


connectDB()
app.listen(port,()=>{
  console.log(`sever is running on port ${port}`)
})