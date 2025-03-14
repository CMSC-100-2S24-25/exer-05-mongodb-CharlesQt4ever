import needle from 'needle';

//save student
// const url = 'http://localhost:3000/save-student';

//  const students = [
//     { stdnum: "1001", fname: "Mary Jane", lname: "Watson", age: 21 },
//     { stdnum: "1002", fname: "Peter", lname: "Parker", age: 21 },
//     { stdnum: "1003", fname: "Tony", lname: "Stark", age: 53 }
// ];

// students.forEach(student => {
//     needle.post(url, student, (err, res) => {
//         if (err) console.error(err);
//         else console.log(res.body);
//     });
// });

//update student
const url = 'http://localhost:3000/update';

const updateData = {
    searchFname: "Mary Jane",
    newFname: "Mary Jane",
    newLname: "Parker"
};

needle.post(url, updateData, (err, res) => {
    if (err) console.error(err);
    else console.log(res.body);
});


//remove user
// const url = 'http://localhost:3000/remove-user';

// const deleteData = {
//     stdnum: "1005"  // Tony Stark's student number
// };

// needle.post(url, deleteData, (err, res) => {
//     if (err) console.error(err);
//     else console.log(res.body);
// });

//remove all users
// const url = 'http://localhost:3000/remove-all-user';

// needle.post(url, {}, (err, res) => {
//     if (err) console.error(err);
//     else console.log(res.body);
// });

//get users
// const stdnum = "1001"; // Mary Jane
// const url = `http://localhost:3000/user?stdnum=${stdnum}`;

// needle.get(url, (err, res) => {
//     if (err) console.error(err);
//     else console.log(res.body);
// });


//get members
// const url = 'http://localhost:3000/members';

// needle.get(url, (err, res) => {
//     if (err) console.error(err);
//     else console.log(res.body);
// });

