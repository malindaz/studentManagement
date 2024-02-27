import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Edit(props) {  // Add 'props' as a parameter
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    useEffect(() => {
        // Fetch the student details based on ID
        const id = props.match.params.id;
        console.log("Student ID:", id);
        axios.get(`http://localhost:8070/student/get/${id}`)
            .then((res) => {
                const student = res.data.student;
                setName(student.name);
                setAge(student.age);
                setGender(student.gender);
            })
            .catch((err) => {
                alert(err.message);
                console.log(console.error());
            });
    }, [props.match.params.id]);

    function sendData(e) {
        e.preventDefault();
        console.log("Form submitted");
        const id = props.match.params.id;
        const updatedStudent = {
            name,
            age,
            gender,
        };

        axios.put(`/student/update/${id}`, updatedStudent)
            .then(() => {
                alert("Student updated");
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="name">Edit Student name</label>
                    <input type="text" className="form-control" id="name" placeholder="Edit student name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Edit Student age</label>
                    <input type="text" className="form-control" id="age" placeholder="Edit student age"
                        onChange={(e) => {
                            setAge(e.target.value);
                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">EditStudent gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Edit student gender"
                        onChange={(e) => {
                            setGender(e.target.value);
                        }} />
                </div>

                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default Edit;
