import { useState } from 'react';
import StudentCard from './StudentCard';
import Pagination from './Pagination';
import Alert from './Alert';

function Directory() {
  const [students, setStudents] = useState([
    { id: 101, name: 'Zubair', major: 'CS', year: 1, gpa: 3.7, views: 0, showDetails: false },
    { id: 102, name: 'Zain', major: 'SE', year: 2, gpa: 3.8, views: 0, showDetails: false },
    { id: 103, name: 'Faisal', major: 'BBA', year: 3, gpa: 3.9, views: 0, showDetails: false },
    { id: 104, name: 'Akram', major: 'MBA', year: 4, gpa: 4.0, views: 0, showDetails: false },
  ]);
  const [showAlert, setShowAlert] = useState(true);

  const handleView = (id) => {
    setStudents(students.map(s =>
      s.id === id
        ? { ...s, views: s.views + 1, showDetails: !s.showDetails }
        : s
    ));
  };

  const handleDelete = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const handleAdd = () => {
    alert('This feature is currently not available.');
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Page Header</h2>
        <button className="btn btn-primary" onClick={handleAdd}>Add New Student</button>
      </div>

      <div className="row">
        {students.map(s => (
          <StudentCard key={s.id} student={s} onView={handleView} onDelete={handleDelete} />
        ))}
      </div>

      <Pagination />

      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
    </div>
  );
}

export default Directory;