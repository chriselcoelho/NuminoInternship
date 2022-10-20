import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Axios from "axios";

function List({ students, handleEdit, handleDelete }) {
  /*
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });
*/
  const [studentlist, setStudentlist] = useState([]);
  useEffect(() => {
    Axios.get("http://13.56.248.58:3306/api/get").then((response) => {
      setStudentlist(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="contain-table">
        <table className="striped-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {studentlist.map((val) => (
              <tr key={val.rollno}>
                <td>{val.rollno}</td>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
                <td>{val.department}</td>
                <td>{val.dob.slice(0, 10)}</td>
                <td>{val.email}</td>
                <td>{val.phoneno}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(val.rollno)}
                    className="button muted-button"
                  >
                    <AiOutlineEdit />
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => {
                      handleDelete(val.rollno);
                    }}
                    className="button muted-button"
                  >
                    <AiOutlineDelete />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;

/*

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>Roll No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, i) => (
                            <tr key={student.rollno}>
                            <td>{student.rollno}</td>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.department}</td>
                                <td>{student.dob} </td>
                                <td>{student.email}</td>
                                <td>{student.phoneno}</td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(student.id)}
                                        className="button muted-button"
                                    >
                                    <AiOutlineEdit/>   
                                     Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(student.id)}
                                        className="button muted-button"
                                    >
                                    <AiOutlineDelete/>    
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Students</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List

*/
