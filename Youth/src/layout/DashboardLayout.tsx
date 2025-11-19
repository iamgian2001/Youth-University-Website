import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="absolute flex flex-col md:flex-row w-full h-fit md:h-full bg-cover bg-mountains">
      <div className="block sm:hidden w-full h-fit">
        <MobileNavbar />
      </div>
      <div className="hidden sm:block md:w-3/12">
        <Navbar />
      </div>
      <div className="w-full h-full md:w-9/12">
        <Outlet />
      </div>
    </div>
  );
}
