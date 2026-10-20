function Navbar(){
  return (
    <nav className="navbar navbar-dark navbar-expand bg-dark px-4">
      <span className="navbar-brand">Student Portal</span>
      <ul className="navbar-nav me-auto text-white">
        <li className="nav-item nav-link">Dashboard</li>
        <li className="nav-item nav-link">Students</li>
        <li className="nav-item nav-link">Courses</li>
        <li className="nav-item nav-link">Reports</li>
      </ul>
      <span className="text-white me-3">Settings</span>
      <input className="form-control me-2 search-input " style={{width: "200px"}} placeholder="Search" />
      <button className="btn btn-primary">Search</button>


    </nav>
  );
}

export default Navbar;