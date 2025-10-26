import { BrowserRouter as Router, Route, Routes } from "react-router";
import Navbar from "./layout/Navbar.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* http://yoursite.com/ */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
