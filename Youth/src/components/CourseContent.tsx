import { useState, useMemo } from "react";
import {
  FileText,
  Download,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export type ContentItem = {
  id: number;
  title: string;
  type: "assignment" | "reading" | "video" | "document" | "other";
  date: Date;
  description?: string;
  fileUrl?: string;
  fileSize?: string;
  dueDate?: Date;
};

export type ContentProps = {
  contentItems: ContentItem[];
};

type GroupedContent = {
  date: string;
  items: ContentItem[];
};

export default function CourseContent({ contentItems }: ContentProps) {
  return (
    <div className="w-full h-fit my-10">
      <h1 className="border-b-8 font-heading text-3xl border-secondary w-fit">
        Content
      </h1>
      {contentItems.map((item) => (
        <div
          key={item.id}
          className="default-card-style my-5 flex flex-col gap-5 font-body text-lg p-2"
        >
          <div className="flex flex-col md:justify-between md:flex-row border-b-2 border-accent">
            <h1 className="text-xl">{item.title}</h1>
            <h1>
              {item.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </h1>
          </div>
          <p>{item.description}</p>
          {item.fileUrl ? (
            <a
              href={item.fileUrl}
              className="flex gap-2 bg-primary hover:text-secondary border rounded-md px-2 py-1 w-fit border-amber-200/50"
              download
            >
              <p>Click to download</p>
              <Download />
            </a>
          ) : null}
          <p>
            Due:{" "}
            {item.dueDate?.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
