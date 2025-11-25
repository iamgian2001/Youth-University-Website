import { ArrowRight, Search } from "lucide-react";
import { motion } from "motion/react";

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
    {
      courseCode: "CS1031",
      name: "Human Computer Interaction",
      path: "/cs1031",
    },
    {
      courseCode: "CS1031",
      name: "Human Computer Interaction",
      path: "/cs1031",
    },
    {
      courseCode: "CS1031",
      name: "Human Computer Interaction",
      path: "/cs1031",
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-full  h-full m-10">
      <h1 className="border-l-6 w-5/12 px-3 py-2 text-xl border-secondary ">
        Year 1
      </h1>
      <form className="w-full lg:w-5/12 h-full font-cta border rounded-md">
        <div className="flex  h-full w-full items-center justify-between">
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
      <div className="mt-2 flex flex-col lg:flex-none lg:grid lg:grid-cols-2 lg:w-9/12 gap-3">
        {courses.map((course) => (
          <motion.div
            key={course.courseCode}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex font-semibold default-card-style w-full p-5 items-center justify-between">
              <div className="flex flex-col">
                <h1>{course.name}</h1>
                <h2 className="font-light">{course.courseCode}</h2>
              </div>
              <ArrowRight />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
