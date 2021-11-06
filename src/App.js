import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Client/Pages/Home/index";
import Nav from "./Client/Components/Navbar";
import About from "./Client/Pages/About/index";
import ContactUs from "./Client/Pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
