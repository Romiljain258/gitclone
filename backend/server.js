const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app=express();
const port=process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//5 line for connection with mongo db
const url = process.env.ATLAS_URI;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


app.get('/',(req,res)=>{
   res.send("hello");
});

const user=require('./Route/api');
app.use('/user',user);

app.listen(port,(req,res)=>{
    console.log("server is running");
})