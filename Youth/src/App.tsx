import { BrowserRouter as Router, Routes, Route } from "react-router";
import { UserRoleProvider } from "./contexts/authContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/student/Dashboard";
import Courses from "./pages/student/Courses";
import Profile from "./pages/Profile";
import StudentSupport from "./pages/student/StudentSupport";
import Resources from "./pages/student/Resources";
import Module from "./pages/student/Module";
import Page404 from "./pages/Page404";
import Accounts from "./pages/admin/Accounts";

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
            <Route path="/accounts-admin" element={<Accounts />} />
          </Route>

          <Route path="/login" element={<Login />} />

          {/* 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </UserRoleProvider>
  );
}
