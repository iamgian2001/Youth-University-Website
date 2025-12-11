import type { ReactNode } from "react";
export type Ticket = {
  id: number;
  title: string;
  date: Date;
  description: string;
  attachmentUrl: string;
  reply: string;
  status: number;
};

export type Person = {
  name: string;
  email: string;
  avatarUrl?: string;
};

export type ModuleLeadersProps = {
  moduleHeads: Person[];
  instructors: Person[];
};

export type NewsCardProps = {
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
};

export type ProgramCardProps = {
  name: string;
  image: string;
};

export type Announcement = {
  id: number;
  title: string;
  content: string;
  date: Date;
};

export type AnnoncementProps = {
  announcements: Announcement[];
};

export type CourseCardProps = {
  title: string;
  description: string;
  linkText: string;
};

export type ContentItem = {
  id: number;
  title: string;
  type: "assignment" | "reading" | "video" | "document" | "other" | string;
  date: Date;
  description?: string;
  fileUrl?: string;
  fileSize?: string;
  dueDate?: Date;
};

export type ContentProps = {
  contentItems: ContentItem[];
};

export type GroupedContent = {
  date: string;
  items: ContentItem[];
};

export type Module = {
  courseName: string;
  courseCode: string;
  moduleLeadersObj: ModuleLeadersProps;
  announcementsObj: AnnoncementProps;
  contentObj: ContentProps;
};

export type Course = {
  courseCode: string;
  courseName: string;
  path: string;
  data: Module;
};

export type UserRoleContextType = {
  userRole: "guest" | "admin" | "lecturer" | "instructor" | "student" | string;
  setUserRole: React.Dispatch<React.SetStateAction<string>>;
};

export type Props = {
  children?: ReactNode;
};
