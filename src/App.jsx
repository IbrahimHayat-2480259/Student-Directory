import Navbar from "./Components/Navbar";
import  Alert  from "./Components/Alert";
import Breadcrumb from "./Components/Breadcrumb";
import Directory from "./Components/Directory";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Breadcrumb/>
        <Directory/>
        <Alert/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
