

import React, { useEffect, useState } from "react";
import { getStudents, createStudent, updateStudent, deleteStudent } from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const handleAddStudent = async () => {
    await createStudent({ name, age, grade });
    setName(""); setAge(""); setGrade("");
    fetchStudents();
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <div>
      <h1>Students</h1>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
      <button onClick={handleAddStudent}>Add Student</button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} ({student.age}, {student.grade})
            <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// Key Points

// DRF backend runs on http://127.0.0.1:8000/api/students/.

// React frontend runs separately (usually on http://localhost:3000/).

// Use Axios (or fetch) to send GET, POST, PUT, DELETE requests to your DRF endpoints.

// You can now POST a new student, GET all students, DELETE, and UPDATE from your React app.