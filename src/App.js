import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Client/Pages/Home/index";
import Nav from "./Client/Components/Navbar";
import About from "./Client/Pages/About/index";
import ContactUs from "./Client/Pages/ContactUs/index";
import Footer from "./Client/Components/Footer";
import AdminHome from "./Admin/Pages/AdminHome";
import SalonEdit from "./Admin/Pages/SalonEdit";
import Login from "./Admin/Pages/AdminHome/Login";

import Join from "./Client/Pages/Join";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, userLoading } = useSelector((state) => state.auth);
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/adminHome"
            element={
              token || isAuthenticated ? (
                <AdminHome />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/Login" element={<Login />} />
          {/* <PrivateRoute path="/adminEdit" element={<SalonEdit />} /> */}
          <Route
            path="/adminEdit/:id"
            element={
              token || isAuthenticated ? (
                <SalonEdit />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
