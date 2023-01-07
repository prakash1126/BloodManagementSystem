
//importing monoogse
const mongoose = require('mongoose');
//creating connection to database
module.exports = connect=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/myproject', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("connected to mongodb");
    }catch(error){
        console.error(error);
    }
  }