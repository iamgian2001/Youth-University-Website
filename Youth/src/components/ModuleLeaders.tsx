import { User } from "lucide-react";

type Person = {
  name: string;
  email: string;
  avatarUrl?: string;
};

type ModuleLeadersProps = {
  moduleHeads: Person[];
  instructors: Person[];
};

const ModuleLeaders = ({ moduleHeads, instructors }: ModuleLeadersProps) => {
  const allPeople = [
    ...moduleHeads.map((p) => ({ ...p, role: "Module Leader" })),
    ...instructors.map((p) => ({ ...p, role: "Instructor" })),
  ];

  return (
    <div className="mt-12 flex flex-col items-center font-body">
      <h2 className="text-2xl font-bold mb-8">Course Team</h2>

      {allPeople.length === 0 ? (
        <p className="text-gray-500">No instructors assigned yet.</p>
      ) : (
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {allPeople.map((person) => (
            <div
              key={person.email}
              className="flex flex-col w-full md:w-fit text-wrap items-center text-center default-card-style rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow"
            >
              {person.avatarUrl ? (
                <img
                  src={person.avatarUrl}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-neutral-950" />
                </div>
              )}

              <p className="font-semibold text-lg">{person.name}</p>
              <p className="text-sm text-secondary font-medium mb-1">
                {person.role}
              </p>
              <p className="text-sm text-wrap ">{person.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleLeaders;
