import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col md:flex-row bg-cover bg-mountains h-screen w-full">
      {/* Mobile Navbar */}
      <div className="md:hidden w-full">
        <MobileNavbar />
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden md:block md:w-3/12 min-h-screen">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-9/12 p-4 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
