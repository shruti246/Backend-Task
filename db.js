const mongoose = require('mongoose')
const connectionUrl = 'mongodb://localhost:27017/students-api'
mongoose.set('strictQuery', false);
mongoose.connect(connectionUrl,{useNewUrlParser:true}).then(()=>{
    console.log('Database Connected Successfully')
}).catch((e)=>{
    console.log(e)
})