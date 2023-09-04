const express = require('express');

const Student = require('../models/student');

const router = express.Router();

router.get('/student/:id',getStudent); // return one or all students;
router.post('/student',addStudent); // add a student
router.put('/student/:id',updateStudent); // update a student
router.delete('/student/:id',deleteStudent); // delete student

module.exports = router;