import { ArrowRight, Search } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      courseCode: "CS1021",
      name: "Data Structures and Algorithms",
      path: "/cs1021",
    },
    {
      courseCode: "CS1031",
      name: "Human Computer Interaction",
      path: "/cs1031",
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="border-l-6 w-3/4 px-3 py-2 text-xl border-primary bg-linear-90 from-secondary to-secondary/0 text-primary ">
        Year 1
      </h1>
      <form className="w-full h-full font-cta border rounded-md">
        <div className="flex  h-full w-full items-center justify-around">
          <Search width={70} />

          <input
            type="text"
            className="w-full focus:border-b focus:outline-none px-0.5 mx-2"
          />
          <button className="bg-secondary font-medium text-primary px-2 py-1 m-1 rounded-lg ">
            Search
          </button>
        </div>
      </form>
      <div className="mt-2 flex flex-col gap-3">
        {courses.map((course) => (
          <div className="flex font-semibold default-card-style p-5 items-center justify-between">
            <div className="flex flex-col">
              <h1>{course.name}</h1>
              <h2 className="font-light">{course.courseCode}</h2>
            </div>
            <ArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
}
