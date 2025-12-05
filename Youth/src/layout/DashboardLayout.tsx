import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col md:flex-row bg-cover bg-mountains w-full h-full sm:h-screen  border border-primary">
      {/* Mobile Navbar */}
      <div className="md:hidden w-full">
        <MobileNavbar />
      </div>

      {/* Sidebar */}
      <div className="hidden md:block shrink-0">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full h-full p-5 min-h-screen ">
        <main className="p-5 flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
