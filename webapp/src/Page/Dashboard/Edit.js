import React, { useState } from "react";
import Swal from "sweetalert2";
import Axios from "axios";

function Edit({ students, selectedStudent, setIsEditing }) {
  const [rollno] = useState(selectedStudent.rollno);
  const [firstname, setFirstname] = useState(selectedStudent.firstname);
  const [lastname, setLastname] = useState(selectedStudent.lastname);
  const [department, setDepartment] = useState(selectedStudent.department);
  const [dob, setDob] = useState(selectedStudent.dob.slice(0, 10));
  const [email, setEmail] = useState(selectedStudent.email);
  const [phoneno, setPhoneno] = useState(selectedStudent.phoneno);

  const updateReview = (rollno) => {
    Axios.put("http://13.56.248.58:3306/api/update", {
      rollno: rollno,
      firstname: firstname,
      lastname: lastname,
      department: department,
      dob: dob,
      email: email,
      phoneno: phoneno,
    }).then(() => {});
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (
      !rollno ||
      !firstname ||
      !lastname ||
      !department ||
      !dob ||
      !email ||
      !phoneno
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${firstname} ${lastname}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1000,
    }).then((result) => {
      window.location.reload();
    });
  };

  /*
    const id = selectedStudent.id;

    const [rollno, setRollno] = useState(selectedStudent.rollno);
    const [firstname, setFirstName] = useState(selectedStudent.firstname);
    const [lastname, setLastName] = useState(selectedStudent.lastname);
    const [department, setDepartment] = useState(selectedStudent.department);
    const [email, setEmail] = useState(selectedStudent.email);
    const [phoneno, setPhoneno] = useState(selectedStudent.phoneno);
    const [dob, setDob] = useState(selectedStudent.dob);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstname || !lastname || !email || !dob) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const student = {
            id,
            rollno,
            firstname,
            lastname,
            department,
            dob,
            email,
            phoneno
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student);
                break;
            }
        }

        setStudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${student.firstname} ${student.lastname}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };
*/
  return (
    <div className="small-container">
      <form onSubmit={handleEdit}>
        <h1>Edit Student</h1>
        <label id="roll">Roll No.: {rollno}</label>

        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <label htmlFor="dob">Date Of Birth</label>
        <input
          id="dob"
          type="date"
          name="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phoneno">Phone No.</label>
        <input
          id="phoneno"
          type="tel"
          name="phoneno"
          value={phoneno}
          pattern="[0-9]{10}"
          placeholder="Phone No"
          onChange={(e) => setPhoneno(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" onClick={updateReview(rollno)} />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
