const express=require('express');
const StudentController=require('../controllers/Student');
const router=express.Router();

//create new student
router.route('/create-student').post(StudentController.createStudent);
//get all students
router.route('/get-students').get(StudentController.getAllStudents);
//get student by id
router.route('/get-student/:id').get(StudentController.findStudentById);
//update student scores
router.route('/update-student-scores/:id').put(StudentController.updateStudentScores)
router.route('/update-student-scores2/:id').put(StudentController.updateStudentScores2)
router.route('/update-student-scores3/:id').put(StudentController.updateStudentScores3)
module.exports=router;