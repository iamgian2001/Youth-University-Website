import { useMemo, useState } from "react";
import { NotificationsSection, SecuritySection } from "./SettingsList";
import { MoveRight } from "lucide-react";

type User = {
  profilePic: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  nic: string;
  dob: Date;
};

const calculateAge = (dob: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

export default function Profile() {
  const data: User = {
    profilePic: "/upload/user.webp",
    fname: "John",
    lname: "Doe",
    email: "john.doe@example.com",
    phone: "+94 71 123 4567",
    nic: "200012345678",
    dob: new Date("1995-03-12"),
  };

  const [active, setActive] = useState("Profile");
  const [activeSettings, setActiveSettings] = useState("Notifications");
  const settingsList = [{ name: "Notifications" }, { name: "Security" }];
  const age = useMemo(() => calculateAge(data.dob), [data.dob]);
  const Profile = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-15 justify-center items-center py-10 px-20 rounded-sm  bg-primary/50 backdrop-blur-2xl border border-white/20 shadow-lg w-10/12 h-fit">
        <div className="flex flex-col justify-center items-center gap-3 mb-12 w-fit">
          <img
            src={data.profilePic}
            alt="Profile"
            className="rounded-full w-46 h-46 border-2 bg-cover aspect-square"
          />
          <button className="bg-secondary w-fit hover:bg-amber-500 font-medium px-10 py-1 text-lg  text-text-default rounded-lg ">
            Edit
          </button>
        </div>

        <ul className="flex flex-col gap-3 text-md w-full">
          <li className="font-body text-3xl w-full wrap-anywhere">
            {data.fname + " " + data.lname}
          </li>

          <li className="flex flex-col justify-center space-y-1.5 w-full">
            <div className="w-full mb-2 font-light">Age</div>
            <div className="text-slate-300 text-sm wrap-anywhere border border-neutral/50 rounded-md p-2 min-w-md w-fit">
              {age}
            </div>
          </li>

          <li className="flex flex-col justify-center space-y-1.5 w-full">
            <div className="w-full  border-slate-400 mb-2 font-light">
              Email
            </div>
            <div className="text-slate-300 text-sm border wrap-anywhere border-neutral/50 rounded-md p-2 min-w-md w-fit">
              {data.email}
            </div>
          </li>

          <li className="flex flex-col justify-center space-y-1.5 w-full">
            <div className="w-full  mb-2 font-light">Phone number</div>
            <div className="text-slate-300 text-sm border wrap-anywhere  border-neutral/50 rounded-md p-2 min-w-md w-fit">
              {data.phone}
            </div>
          </li>

          <li className="flex flex-col justify-center space-y-1.5 w-full">
            <div className="w-full  mb-2 font-light">NIC number</div>
            <div className="text-slate-300 text-sm border wrap-anywhere border-neutral/50 rounded-md p-2 min-w-md w-fit">
              9999999999999999999999999999999999999999999999999999999999
            </div>
          </li>
        </ul>
      </div>
    );
  };
  const Settings = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-center items-center  w-fit h-fit">
        <div className="flex  flex-row">
          <section className="default-card-style  py-10 px-5 settings-list flex flex-col items-start gap-3 text-md min-w-sm">
            {settingsList.map((item) => (
              <div
                onClick={() => setActiveSettings(item.name)}
                key={item.name}
                className={`flex flex-row gap-20 w-full  ${
                  activeSettings == item.name
                    ? " text-neutral-500"
                    : " hover:text-secondary "
                }`}
              >
                <button className="flex items-center justify-between  w-full gap-4">
                  <span>{item.name}</span>
                  <MoveRight className="opacity-50" />
                </button>
              </div>
            ))}
          </section>
          <section className="default-card-style   py-10 px-5 flex flex-col items-start gap-3 text-md w-full">
            {renderSettingsContent()}
          </section>
        </div>
      </div>
    );
  };

  const renderSettingsContent = () => {
    switch (activeSettings) {
      case "Notifications":
        return <NotificationsSection />;
      case "Security":
        return <SecuritySection />;
      default:
        <SecuritySection />;
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-full w-full gap-2  overflow-auto my-8">
      <div className="default-card-style flex flex-row md:flex-col  w-fit h-fit   px-6 py-5 gap-2  ">
        <button
          onClick={() => setActive("Profile")}
          className={`text-md border-b  font-medium w-full h-fit p-2  ${
            active == "Profile"
              ? "text-slate-500"
              : "text-white hover:text-secondary"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActive("Settings")}
          className={`text-md  border-b font-medium w-full h-fit p-2  ${
            active == "Settings"
              ? "text-slate-500"
              : "text-white hover:text-secondary"
          }`}
        >
          Settings
        </button>
      </div>
      {active == "Profile" ? Profile() : Settings()}
    </div>
  );
}
