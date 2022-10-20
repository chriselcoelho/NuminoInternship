import React, { useState } from "react";
import Swal from "sweetalert2";
import Axios from "axios";

function Add({ students, setStudents, setIsAdding }) {
  const [rollno, setRollno] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const submitReview = () => {
    Axios.post("http://13.56.248.58:3306/api/insert", {
      rollno: rollno,
      firstname: firstname,
      lastname: lastname,
      department: department,
      dob: dob,
      email: email,
      phoneno: phoneno,
    }).then(() => {});
  };
  /*
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!rollno || !firstname || !lastname || !email || !dob) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = students.length + 1;
    const newStudent = {
      id,
      rollno,
      firstname,
      lastname,
      department,
      dob,
      email,
      phoneno,
    };
    students.push(newStudent);
    setStudents(students);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstname} ${lastname}'s data has been Added.`,
      showConfirmButton: true,
      timer: 1500,
    });
  };
*/
  const handleAdd = (e) => {
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
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Student Added!",
      text: `${firstname} ${lastname}'s data has been Added.`,
      showConfirmButton: true,
      timer: 2500,
    }).then((result) => {
      window.location.reload();
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Student</h1>

        <label htmlFor="rollno">Roll No.</label>
        <input
          id="rollno"
          type="text"
          name="rollno"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          //ref={textInput}
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
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
          <input type="submit" value="Add" onClick={submitReview} />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
