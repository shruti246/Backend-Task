const Students = require('../model/studentModel')
const gradeModel = require('../model/gradeModel')
const {stundentValidation} = require('../middleware/validation')
var objectid = require('objectid')

/**add students */
exports.addStudent = async(req,res)=>{
    const{error ,value} =  stundentValidation(req.body)
    if (error) return res.status(400).send({errors:error.details[0].message});
    try{
        const studentInfo = new Students(req.body)
        await studentInfo.save(studentInfo)
        res.status(200).send(studentInfo)
    }catch(e){
        res.status(400).send(e)
    }
}

/**get students */
exports.getStudents = async(req,res)=>{

    try{
       if(req.params.id){
         // const  ss = await Students.aggregate([{$match:{_id:objectid('63ab4dba9e22a78ddeedf111')}}]) 
            const students = await Students.aggregate([{$match:{_id:objectid(req.params.id)}},{ $lookup: { from: 'grades', localField: '_id', foreignField: 'student_id', as: 'result' } }]);
            if(students.length == 0){
                res.status(400).send({error:'Student Not Found'})
            }
            res.send({students})
       }else{
        const students = await Students.aggregate([{ $lookup: { from: 'grades', localField: '_id', foreignField: 'student_id', as: 'result' } }]);
        res.send(students)
       } 
    }catch(e){
        res.status(400).send(e)
    }
}

/**remove students */
exports.removeStudents = async(req,res)=>{
   try{
        const isPresent = await Students.findById(req.params.id)
        if(!isPresent){
            res.status(400).send({error:'someting went wrong'})
        } 
        const student = await Students.findByIdAndDelete(req.params.id)
        res.send({success:'student deleted successfully'})
   }catch(e){
        res.status(400).send(e)
   } 
}

/**edit students */
exports.editStudentInfo = async(req,res) =>{
    try{
        const student = await Students.findByIdAndUpdate(req.params.id,req.body,{new:true ,runValidators:true})
        res.status(200).send(student)
    }catch(e){
        res.status(400).send(e)
    }
}