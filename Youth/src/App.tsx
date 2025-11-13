import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import Dashboard from "./pages/Dashboard.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* http://yoursite.com/ */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
