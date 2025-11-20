import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";

import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Dashboard layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Standalone routes */}
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}
