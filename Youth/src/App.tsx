import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import Dashboard from "./pages/Dashboard.js";
import Navbar from "./layout/Navbar.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />{" "}
        {/* http://yoursite.com/ */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar width="w-2/12" />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
