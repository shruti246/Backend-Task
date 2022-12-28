const express = require('express')
const routes = express.Router();
/**controller */
const Student = require('../controller/studentController')
const Grade = require('../controller/gradeController')

routes.post('/add',Student.addStudent)
routes.get('/getStudents',Student.getStudents)
routes.get('/getStudents/:id',Student.getStudents)
routes.delete('/removeStudents/:id',Student.removeStudents)
routes.patch('/editStudentInfo/:id',Student.editStudentInfo)


routes.post('/addGrade',Grade.addGrade)
routes.get('/getGrades/:id',Grade.getGrades)
routes.patch('/editGrade/:id',Grade.editGrade)

module.exports = routes