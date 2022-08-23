const mongoose = require("mongoose");
require("dotenv").config();

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const DB_URL = process.env.DB_ENDPOINT;
  
let db_Connection =()=>{
  mongoose
    .connect(DB_URL, connectionParams)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log('Error connecting to the database',err))

}

module.exports = db_Connection ;
