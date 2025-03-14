import {
    homepage,
    saveStudent,
    updateStudent,
    removeUser,
    removeAllUsers,
    getUser,
    getAllUsers
} from './controller.js';

const router = (app) => {
    app.get('/', homepage);

    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUsers);

    app.get('/user', getUser);
    app.get('/members', getAllUsers);
};

export default router;
