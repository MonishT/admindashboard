import React, { useState } from 'react';
import StudentForm from './pages/StudentForm.jsx';
import TeacherForm from './pages/TeacherForm.jsx';

function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [teacherClass, setTeacherClass] = useState('');

  // Function to add a student
  const addStudent = () => {
    const newStudent = { studentName, studentClass };
    setStudents([...students, newStudent]);
    setStudentName('');
    setStudentClass('');
  };

  // Function to add a teacher
  const addTeacher = () => {
    const newTeacher = { teacherName, teacherClass };
    setTeachers([...teachers, newTeacher]);
    setTeacherName('');
    setTeacherClass('');
  };

  // Function to delete a student
  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  // Function to delete a teacher
  const deleteTeacher = (index) => {
    const updatedTeachers = [...teachers];
    updatedTeachers.splice(index, 1);
    setTeachers(updatedTeachers);
  };

  return (
    <div>
      <h1>Student Teacher Management Dashboard</h1>

      <h2>Add Student</h2>
      <StudentForm
        name={studentName}
        Class={studentClass}
        setName={setStudentName}
        setClass={setStudentClass}
        addStudent={addStudent}
      />

      <h2>Add Teacher</h2>
      <TeacherForm
        name={teacherName}
        Class={teacherClass}
        setName={setTeacherName}
        setClass={setTeacherClass}
        addTeacher={addTeacher}
      />

      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.studentName} - {student.studentClass}
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher, index) => (
          <li key={index}>
            {teacher.name} - {teacher.Class}
            <button onClick={() => deleteTeacher(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;