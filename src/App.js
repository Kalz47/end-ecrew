import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Client/Pages/Home/index";
import Nav from "./Client/Components/Navbar";
import About from "./Client/Pages/About/index";
import ContactUs from "./Client/Pages/ContactUs/index";
import Footer from "./Client/Components/Footer";
import AdminHome from "./Admin/Pages/AdminHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/adminHome" element={<AdminHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
