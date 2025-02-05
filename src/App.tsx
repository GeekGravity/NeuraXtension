import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mission from "./Pages/Mission";
import Events from "./Pages/Events";
import GetInvolved from "./Pages/GetInvolved";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Get-Involved" element={<GetInvolved />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
