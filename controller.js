import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

const Student = mongoose.model('Student', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
}, 'studentData');

//save student
const saveStudent = async (req, res) => {
    try {
        const { stdnum, fname, lname, age } = req.body;

        const newStudent = new Student({ stdnum, fname, lname, age });
        const result = await newStudent.save();

        if (result) {
            res.send({ inserted: true });
        } else {
            res.send({ inserted: false });
        }
    } catch (err) {
        res.send({ inserted: false });
    }
};

//update
const updateStudent = async (req, res) => {
    try {
        const { searchFname, newFname, newLname } = req.body;

        const result = await Student.updateOne(
            { fname: searchFname },
            { $set: { fname: newFname, lname: newLname } }
        );

        if (result.modifiedCount > 0) {
            res.send({ updated: true });
        } else {
            res.send({ updated: false });
        }

    } catch (err) {
        console.error(err);
        res.send({ updated: false });
    }
};

//remove user
const removeUser = async (req, res) => {
    try {
        const { stdnum } = req.body;

        const result = await Student.deleteOne({ stdnum });
        res.send(result);
    } catch (err) {
        res.send({ deleted: false });
    }
};

//remove all user
const removeAllUsers = async (req, res) => {
    try {
        const result = await Student.deleteMany({});
        if (result.acknowledged && result.deletedCount > 0) {
            res.send({ deleted: true });
        } else {
            res.send({ deleted: false });
        }
    } catch (err) {
        res.send({ deleted: false });
    }
};

//user
const getUser = async (req, res) => {
    try {
        const { stdnum } = req.query;
        const users = await Student.find({ stdnum });
        res.send(users);
    } catch (err) {
        res.send([]);
    }
};

//members
const getAllUsers = async (req, res) => {
    try {
        const users = await Student.find({});
        res.send(users);
    } catch (err) {
        res.send([]);
    }
};

export {
    homepage,
    saveStudent,
    updateStudent,
    removeUser,
    removeAllUsers,
    getUser,
    getAllUsers
};
