function TeacherForm({ name, Class, setName, setClass, addTeacher }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      addTeacher();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter teacher name"
          required
        />
        {'  '}
        <input
          type="text"
          value={Class}
          onChange={(e) => setClass(e.target.value)}
          placeholder="Enter teacher Class"
          required
        />
        {'  '}
        <button type="submit">Add Teacher</button>
      </form>
    );
  }
export default TeacherForm;