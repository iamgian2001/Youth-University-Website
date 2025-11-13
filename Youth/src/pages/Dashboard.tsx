import Navbar from "../layout/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
