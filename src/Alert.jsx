function Alert({ onClose }) {
  return (
    <div className="alert alert-info alert-dismissible">
      Student records have been successfully updated.
      <button className="btn-close" onClick={onClose}></button>
    </div>
  );
}

export default Alert;