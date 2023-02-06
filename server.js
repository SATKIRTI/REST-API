const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app =express()
const port=process.env.PORT || 5050
app.use(cors())
app.use(express.json());

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const uri= "mongodb+srv://Satkirti:yTlauFHCc5VLl4Ru@cluster0.qyac4xu.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri,connectionParams)
.then(()=>{
    console.log("connection to db");
}).catch(err=>{
    console.log("error connecting to mongodb: ",err);
})

const userRoutes = require('./routes/Users')
app.use('/users',userRoutes);


app.listen(port,()=>{
    console.log("app is listening on",port);
})