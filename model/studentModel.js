const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true  
    },
    gender:{
        type:String,
        trim:true,
        required:true 
    },
    address:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        min: '2010-01-01',
        max: '2011-12-30',
        required:true
    }
},{
    timestamps :true
})



const Student = mongoose.model('students',studentSchema)
module.exports = Student