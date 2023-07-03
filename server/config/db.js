const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/notes",{
//     useNewUrlParser:true,useunifiedTopology:true,

// }).then(()=>{console.log("connection successfull")}).catch((err)=>{
//     console.log(`occur something is ${err}`);
// });
// 
 const connectDB = async() => {
   try {
     const conn = await mongoose.connect("mongodb://127.0.0.1:27017/notes");
     console.log(`Database Connected: ${conn.connection.host}`);
   } catch (error) {
     console.log(error);
   }
 }
 module.exports = connectDB;