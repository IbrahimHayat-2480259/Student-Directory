function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
      <span className="navbar-brand">StudentPortal</span>
      <ul className="navbar-nav me-auto">
        <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Students</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Courses</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
      </ul>
      <span className="text-white me-3">Settings ▾</span>
      <input className="form-control me-2 search-input" placeholder="Search" />
      <button className="btn btn-primary">Search</button>
    </nav>
  );
}

export default Navbar;