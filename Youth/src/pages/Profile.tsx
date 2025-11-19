import { Link } from "react-router";

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

  const age = calculateAge(new Date("1995-03-12"));

  return (
    <div className="flex flex-col justify-center items-center h-full w-full overflow-y-scroll">
      <div className="flex flex-col space-y-3.5 justify-center items-center py-10 px-5 rounded-sm my-8 bg-primary/50 backdrop-blur-2xl border border-white/20 shadow-lg w-10/12 h-fit">
        <div className="flex flex-col justify-center items-center gap-3 mb-12">
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
            <div className="w-fullmb-2">Age</div>
            <div className="text-slate-300 text-sm wrap-anywhere border border-neutral/50 rounded-md p-2">
              {age}
            </div>
          </li>

          <li className="flex flex-col justify-center space-y-1.5 w-full">
            <div className="w-full  border-slate-400 mb-2">Email</div>
            <div className="text-slate-300 text-sm border  wrap-anywhere border-neutral/50 rounded-md p-2">
              {data.email}
            </div>
          </li>

          <li className="flex flex-col justify-center space-y-1.5 w-full">
            <div className="w-full  mb-2">Phone number</div>
            <div className="text-slate-300 text-sm border  wrap-anywhere  border-neutral/50 rounded-md p-2">
              {data.phone}
            </div>
          </li>

          <li className="flex flex-col justify-center space-y-1.5 w-full">
            <div className="w-full  mb-2">NIC number</div>
            <div className="text-slate-300 text-sm border wrap-anywhere border-neutral/50 rounded-md p-2">
              9999999999999999999999999999999999999999999999999999999999
            </div>
          </li>
        </ul>
      </div>

      <Link to="/settings">
        <button className="text-lg bg-secondary hover:bg-amber-500 font-medium mb-10  w-fit h-fit px-4 py-1 rounded-lg text-primary">
          Settings
        </button>
      </Link>
    </div>
  );
}
