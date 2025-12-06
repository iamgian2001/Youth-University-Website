import type { Module } from "../types";

const dummyModules: Record<string, Module> = {
  CS1021: {
    courseName: "Data Structures & Algorithms 1",
    courseCode: "CS1021",

    moduleLeadersObj: {
      moduleHeads: [
        { name: "Dr. Amanda Perera", email: "amanda.perera@university.edu" },
        { name: "Prof. Michael Silva", email: "michael.silva@university.edu" },
      ],
      instructors: [
        { name: "John Fernando", email: "john.fernando@university.edu" },
        { name: "Nadeesha Kumari", email: "nadeesha.kumari@university.edu" },
      ],
    },

    announcementsObj: {
      announcements: [
        {
          id: 1,
          title: "Announcement Title",
          date: new Date("2025/12/20"),
          content: "Lorem ipsum…",
        },
      ],
    },

    contentObj: {
      contentItems: [
        {
          id: 1,
          title: "Module assignment",
          type: "assignment",
          date: new Date(2025, 8, 20),
          description: "Lorem ipsum…",
          fileUrl: "/courses",
          dueDate: new Date(2025, 9, 20),
        },
      ],
    },
  },
};

export default dummyModules;
