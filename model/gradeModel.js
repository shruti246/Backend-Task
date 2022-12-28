const mongoose = require('mongoose')
const Student = require('./studentModel')

const gradeSchema = mongoose.Schema({
    grade:{
        type:String,
        required:true
    },
    classteacher:{
        type:String,
        required:true
    },
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:Student,
    }
})

const Grade = mongoose.model('grades',gradeSchema)
module.exports = Grade