const express = require('express');
const { getStudent, addStudent, updateStudent, deleteStudent } = require('../controllers/student');
const router = express.Router();

router.use(express.json());

router.get('/get-student',getStudent); // return one or all students;
router.post('/add-student',addStudent); // add a student
router.put('/change-student/:id',updateStudent); // update a student ex: /change-student/123
router.delete('/delete-student/:id',deleteStudent); // delete student ex: /delete-student?id=123

module.exports = router;