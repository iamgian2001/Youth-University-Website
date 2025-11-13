import Logo from "../assets/logo.svg?react";
import { Link } from "react-router";

function Login() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm  flex flex-col items-center">
        <div className="w-fit h-16">
          <Logo />
        </div>
        <h2 className="mt-10 text-center text-2xl/9 mini-title tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block small-text text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="small-text">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block  text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-blue-800">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <Link to="/dashboard">
              <button
                type="submit"
                className="flex w-full justify-center rounded-m bg-secondary px-3 py-1.5 font-body text-md font-semibold shadow-xs hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
