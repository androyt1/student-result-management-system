const mongoose = require('mongoose');
const MONGO_URL=process.env.MONGO_URL;

//connect monogoose to mongodb

const DBConnect=async ()=>{
    await mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log('mongoose db connected');
}

module.exports=DBConnect;