import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col md:flex-row bg-cover bg-mountains  min-h-screen  md:h-screen">
      {/* Mobile Navbar */}
      <div className="md:hidden w-full">
        <MobileNavbar />
      </div>

      {/* Sidebar */}
      <div className="hidden md:block shrink-0 ">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col mt-10 flex-1  ">
        <main className="p-5 flex-1 overflow-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
