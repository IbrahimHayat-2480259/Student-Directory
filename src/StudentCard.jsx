function StudentCard({ student, onView, onDelete }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center">
        <div className="card-avatar bg-secondary text-white">👤</div>
        <div className="card-body">
          <h5>{student.name}</h5>
          <p className="mb-1">ID: {student.id}</p>
          <p className="mb-1">Major: {student.major}</p>

          {student.showDetails && (
            <>
              <p className="mb-1">Year: {student.year}</p>
              <p className="mb-2">GPA: {student.gpa}</p>
            </>
          )}

          <p className="text-muted small">Profile Views: {student.views}</p>

          <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onView(student.id)}>
            View Profile
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(student.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;