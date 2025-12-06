import { CloudAlert } from "lucide-react";
import { Link } from "react-router";
export default function Page404() {
  return (
    <div className="bg-mountains h-screen  w-full p-10">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <h1 className="font-heading text-3xl w-full text-center">
          Oops, something went wrong please reload the page or wait a moment!
        </h1>
        <CloudAlert size={70} />
        <Link to="/dashboard">
          <button className="border-2 bg-primary/50 rounded-md p-2 my-2 font-semibold">
            Return to home
          </button>
        </Link>
      </div>
    </div>
  );
}
