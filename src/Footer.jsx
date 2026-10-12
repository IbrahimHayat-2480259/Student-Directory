function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6>Links</h6>
            <div><a href="#" className="text-white-50 text-decoration-none">Home</a></div>
            <div><a href="#" className="text-white-50 text-decoration-none">Computer Science</a></div>
            <div><a href="#" className="text-white-50 text-decoration-none">Courses</a></div>
            <div><a href="#" className="text-white-50 text-decoration-none">Reports</a></div>
          </div>
          <div className="col-md-6">
            <h6>Contact Info</h6>
            <div><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></div>
            <div className="text-white-50">03128745215</div>
            <div className="text-white-50">Student@gmail.com</div>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center text-white-50 mb-0">© 2024 StudentPortal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;