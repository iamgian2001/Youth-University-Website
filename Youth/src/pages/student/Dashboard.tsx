import { ArrowRight } from "lucide-react";
function Dashboard() {
  return (
    <div className="flex flex-row w-full h-full gap-5">
      <div className="flex flex-col w-3/4">
        {/* Left */}
        <h1>
          Hello,
          <br />
          Geesara!
        </h1>
        <div className="default-card-style w-full h-fit">
          <h1 className="border-b-2 border-white/50 p-2 font-medium">
            Recently Accessed
          </h1>
          <ul className="p-2 flex flex-col gap-2">
            <a href="">
              <p className="w-full bg-white/10 rounded-lg p-1 hover:bg-white/60 hover:text-primary">
                Data Strutures Algorithms II
              </p>
            </a>
            <a href="">
              <p className="w-full bg-white/10 rounded-lg p-1 hover:bg-white/60 hover:text-primary">
                Human Computer Interaction
              </p>
            </a>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {/*Right*/}
        {/* widegets / */}{" "}
        <div className="flex flex-wrap gap-3 m-2">
          <div className=" w-fit h-fit flex flex-col bg-linear-90 bg-primary/70 p-5 gap-2 rounded-2xl shadow-2xl ">
            <p className="text-secondary text-xl font-medium">Due work</p>
            <p className="text-red-500 font-semibold text-4xl">4</p>
          </div>
          <div className="w-fit h-fit flex flex-col bg-linear-90 bg-primary/70 p-5 gap-2 rounded-2xl shadow-2xl ">
            <p className="text-secondary text-xl font-medium">
              Course Completion
            </p>
            <p className=" font-semibold text-4xl">50%</p>
          </div>
        </div>
        <div className="default-card-style w-full h-fit">
          <h1 className="text-xl border-b-2 p-3 border-white/50">
            Site Annoucements
          </h1>
          <ul className="p-2 flex flex-col justify-center w-full ">
            <a href="" className="flex flex-row justify-between ">
              <li className="bg-white/10 rounded-md p-1">
                Site maintenance schedule
              </li>
              <ArrowRight />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
