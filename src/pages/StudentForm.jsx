function StudentForm({ name, Class, setName, setClass, addStudent }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      addStudent();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
          required
        />
        {'  '}
        <input
          type="text"
          value={Class}
          onChange={(e) => setClass(e.target.value)}
          placeholder="Enter student Class"
          required
        />
        {'  '}
        <button type="submit">Add Student</button>
      </form>
    );
  }

  export default StudentForm;