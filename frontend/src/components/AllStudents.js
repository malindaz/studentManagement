import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios.get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8070/student/delete/${id}`)
      .then(response => {
        alert("Student Deleted")
        console.log(response.data);
        // Remove the deleted student from the state
        setStudents(students.filter(student => student._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h1><center>All Students</center></h1>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                <a className="btn btn-warning" href={`/edit/${student._id}`}>
                  <i className="fas fa-edit"></i> &nbsp;Edit
                </a>
                &nbsp;
                <button className="btn btn-danger" onClick={() => deleteStudent(student._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
