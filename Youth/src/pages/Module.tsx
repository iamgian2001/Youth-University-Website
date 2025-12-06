import { useParams } from "react-router";
import { useEffect, useState } from "react";
import dummyModules from "../data/dummyModules";
import ModuleLeaders from "../components/ModuleLeaders";
import ModuleAnnouncements from "../components/ModuleAnnouncements";
import CourseContent from "../components/CourseContent";
import type { Module } from "../types";

export default function ModulePage() {
  const { moduleId } = useParams();

  const moduleData = dummyModules[moduleId as string];

  if (!moduleData) {
    return <p>No module found for ID: {moduleId}</p>;
  }

  const sortedContent = [...moduleData.contentObj.contentItems].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  return (
    <div>
      <h1 className="border-l-8 border-secondary p-3 w-fit bg-primary mb-10">
        {moduleData.courseName} - {moduleData.courseCode}
      </h1>

      <ModuleAnnouncements
        announcements={moduleData.announcementsObj.announcements}
      />

      <ModuleLeaders
        moduleHeads={moduleData.moduleLeadersObj.moduleHeads}
        instructors={moduleData.moduleLeadersObj.instructors}
      />

      <CourseContent contentItems={sortedContent} />
    </div>
  );
}
