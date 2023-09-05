const Student = require('../models/student');

const getStudent = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);
        if (id) {
            // If an ID is provided, find a single student by ID
            const student = await Student.findById(id);

            if (!student) {
                // If the student with the given ID is not found, return a 404 response
                res.status(404).json({ message: 'Student not found' });
            } else {
                // If the student is found, return it as a response
                res.status(200).json(student);
            }
        } else {
            // If no ID is provided, get all students
            const students = await Student.find({});
            res.status(200).json(students);
        }
    } catch (err) {
        // Handle any errors that occur during the process
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}


const addStudent = async (req,res) => {
    try{
        const {name, age, grade} = req.body;
        const student = new Student({ name, age, grade });

        await student.save();

        res.status(201).json({message: 'Student Created', data: {name, age, grade}});
    }
    catch(err){
        res.status(500).json({message: 'Not created', error : err.message});
    }
}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, grade } = req.body;

        // Use await with findByIdAndUpdate to ensure the operation completes before continuing
        const updatedStudent = await Student.findByIdAndUpdate(id, { name, age, grade }, { new: true });

        if (!updatedStudent) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        res.status(200).json(updatedStudent);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}


const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        res.status(204).json({message: 'Student deleted'});
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}


module.exports = { getStudent, addStudent, updateStudent, deleteStudent };