import { Link } from "react-router";

function Header() {
  return (
    <div className="flex flex-row  px-5 py-2.5 bg-neutral   text-text-secondary justify-between items-center ">
      <div className="flex flex-col md:max-2xl:flex-row 2xl:flex-row space-x-4 small-text">
        <div className="flex flex-row space-x-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 text-primary" // Use w-6 and h-6 for size
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <p>+94 775428654</p>
        </div>

        <div className="flex flex-row space-x-1 items-center small-text sm:text-lg md:text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3" // Use w-6 and h-6 for size
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <p>company@gmail.com</p>
        </div>
      </div>

      <div
        className="flex flex-row items-center space-x-2 md:2xl:space-x-4 2xl:space-x-4 
      justify-center small-text md:max-2xl:button-text 2xl:button-text font-semibold"
      >
        <Link to="/login">
          <button className="text-text-light bg-primary px-5 py-1 lg:min-2xl:px-7 lg:min-2xl:py-4 rounded-tl-lg rounded-br-lg ">
            Login
          </button>
        </Link>
        <button className="text-text-default bg-secondary px-5 py-1 lg:min-2xl:px-7 lg:min-2xl:py-4 rounded-tl-lg rounded-br-lg">
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
