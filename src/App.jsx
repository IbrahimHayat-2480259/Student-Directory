import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import Directory from './Directory';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="container mt-3">
        <Breadcrumb />
        <Directory />
      </div>
      <Footer />
    </div>
  );
}

export default App;