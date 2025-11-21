import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col md:flex-row bg-cover bg-mountains min-h-screen w-full">
      {/* Mobile Navbar */}
      <div className="md:hidden w-full">
        <MobileNavbar />
      </div>

      {/* Sidebar */}
      <div className="hidden md:block w-3/12 h-screen">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="w-full h-full p-4">
        <Outlet />
      </div>
    </div>
  );
}
