const mongoose = require('mongoose')

const mongo_url = process.env.MONGO_DB;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("connect established");
}).catch((err)=>{
    console.log("err", err)
})