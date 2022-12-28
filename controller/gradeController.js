const Grades = require('../model/gradeModel')

exports.addGrade = async(req,res)=>{
    try{
        const gradeSystem = new Grades(req.body)
        await gradeSystem.save()
        res.send(gradeSystem)
    }catch(e){
        res.send(e)
    }
}

exports.getGrades = async(req,res)=>{
    try{
        const data = await Grades.findById(req.params.id)
        await data.populate('student_id')
        res.send(data)
    }catch(e){
        res.send(e).status(400)
    }
}

exports.editGrade = async(req,res)=>{
    try{
        const student = await Grades.findByIdAndUpdate(req.params.id,req.body,{new:true ,runValidators:true})
        res.status(200).send(student)
    }catch(e){
        res.status(400).send(e)
    }
}