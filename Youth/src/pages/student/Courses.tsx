import { ArrowRight, Search } from "lucide-react";
import type { Course, Module } from "../../types";
import { motion } from "motion/react";
import { Link } from "react-router";

export default function Courses() {
  const dummyModuleHeads = [
    {
      name: "Dr. Amanda Perera",
      email: "amanda.perera@university.edu",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Prof. Michael Silva",
      email: "michael.silva@university.edu",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  const dummyInstructors = [
    {
      name: "John Fernando",
      email: "john.fernando@university.edu",
      avatarUrl: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      name: "Nadeesha Kumari",
      email: "nadeesha.kumari@university.edu",
      avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Tharindu Abeysekara",
      email: "tharindu.abeysekara@university.edu",
    },
  ];

  const dummyAnnouncements = [
    {
      id: 1,
      title: "Announcement Title",
      date: new Date("2025/12/20"),
      content: `Lorem ipsum dolor sit amet...`,
    },
    {
      id: 2,
      title: "Announcement Title 2",
      date: new Date("2025/12/22"),
      content: `Lorem ipsum dolor sit amet...`,
    },
  ];

  const dummyContent = [
    {
      id: 1,
      title: "Module assignment",
      type: "assignment",
      date: new Date(2025, 8, 20),
      description: `Lorem ipsum dolor sit amet...`,
      fileUrl: "/courses",
      dueDate: new Date(2025, 9, 20),
    },
    {
      id: 2,
      title: "Module assignment",
      type: "assignment",
      date: new Date(2025, 0, 1),
      description: `Lorem ipsum dolor sit amet...`,
      fileUrl: "/courses",
      dueDate: new Date(),
    },
    {
      id: 3,
      title: "Module assignment",
      type: "assignment",
      date: new Date(2023, 0, 19),
      description: `Lorem ipsum dolor sit amet...`,
      fileUrl: "/courses",
      dueDate: new Date(),
    },
  ];

  // ------------------ THE MODULE ------------------

  const DSA1101: Module = {
    courseName: "Data Structures & Algorithms 1",
    courseCode: "CS1021",

    moduleLeadersObj: {
      moduleHeads: dummyModuleHeads,
      instructors: dummyInstructors,
    },

    announcementsObj: {
      announcements: dummyAnnouncements,
    },

    contentObj: {
      contentItems: dummyContent,
    },
  };

  const courses: Course[] = [
    {
      courseCode: "CS1021",
      courseName: "Data Structures & Algorithms",
      path: "/cs1021",
      data: DSA1101,
    },
  ];

  return (
    <div className="flex flex-col gap-5 h-fit">
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

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
        {courses.map((course) => (
          <motion.div
            key={course.courseCode}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 600, damping: 20 }}
          >
            <Link to={`/courses/${course.courseCode}`}>
              <div className="flex font-semibold default-card-style w-full p-5 items-center justify-between">
                <div className="flex flex-col">
                  <h1>{course.courseName}</h1>
                  <h2 className="font-light">{course.courseCode}</h2>
                </div>
                <ArrowRight />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
