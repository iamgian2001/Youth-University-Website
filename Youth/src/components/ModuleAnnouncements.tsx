import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import type { AnnoncementProps } from "../types";

export default function ModuleAnnouncements({
  announcements,
}: AnnoncementProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const sorted = [...announcements].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className="default-card-style p-6 rounded-xl">
      <h1 className="font-heading text-2xl border-l-8 border-secondary font-semibold px-4 mb-8">
        Announcements
      </h1>

      {sorted.length === 0 && (
        <p className="text-center text-gray-500 py-8">No announcements yet.</p>
      )}

      <div className="space-y-6">
        {sorted.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="bg-primary border border-white/30 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between  text-left"
              >
                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-slate-100">
                    {item.title}
                  </h2>
                  <p className="text-sm text-secondary mt-1">
                    {item.date.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <ChevronDown
                  className={clsx(
                    "w-5 h-5 text-secondary  transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {/* the toggle thingy */}
              <div
                className={clsx(
                  "overflow-hidden transition-all  w-full duration-500 ease-in-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="font-body text-slate-200  leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
