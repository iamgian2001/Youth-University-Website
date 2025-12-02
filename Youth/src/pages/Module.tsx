import ModuleLeaders from "../components/ModuleLeaders";
import ModuleAnnouncements from "../components/ModuleAnnouncements";
import CourseContent from "../components/CourseContent";
import type { ContentItem } from "../components/CourseContent";

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
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 2,
    title: "Announcement Title 2",
    date: new Date("2025/12/22"),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

const content: ContentItem[] = [
  {
    id: 1,
    title: "Module assignment",
    type: "assignment",
    date: new Date(2025, 8, 20),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    fileUrl: "/courses",
    dueDate: new Date(2025, 9, 20),
  },
  {
    id: 2,
    title: "Module assignment",
    type: "assignment",
    date: new Date(2025, 0, 1),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    fileUrl: "/courses",
    dueDate: new Date(),
  },
  {
    id: 3,
    title: "Module assignment",
    type: "assignment",
    date: new Date(2023, 0, 19),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    fileUrl: "/courses",
    dueDate: new Date(),
  },
];

const sortedContent = [...content].sort(
  (a, b) => a.date.getTime() - b.date.getTime()
);

export default function Module() {
  return (
    <div>
      <ModuleAnnouncements announcements={dummyAnnouncements} />
      <ModuleLeaders
        moduleHeads={dummyModuleHeads}
        instructors={dummyInstructors}
      />
      <CourseContent contentItems={sortedContent} />
    </div>
  );
}
