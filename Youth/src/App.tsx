import { BrowserRouter as Router, Routes, Route } from "react-router";
import { UserRoleProvider } from "./contexts/authContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import StudentSupport from "./pages/StudentSupport";
import Resources from "./pages/Resources";
import Module from "./pages/Module";
import Page404 from "./pages/Page404";

import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";

export default function App() {
  return (
    <UserRoleProvider>
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
            <Route path="/resources" element={<Resources />} />
            <Route path="/student-support" element={<StudentSupport />} />
            <Route path="/courses/:moduleId" element={<Module />} />
          </Route>

          <Route path="/login" element={<Login />} />

          {/* 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </UserRoleProvider>
  );
}
