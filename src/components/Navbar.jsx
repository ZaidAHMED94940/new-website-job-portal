import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Job" },
    { path: "/salary", title: "Salary Estimated" },
    { path: "/post-about", title: "Post a Job" }
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-center p-4">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <a href="/" className="flex items-center gap-2 text-2xl text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
            >
              <circle
                cx="12.0143"
                cy="12.5143"
                r="12.0143"
                fill="#3575E2"
                fillOpacity="0.4"
              />
              <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
            </svg>
            <span>Job Portal</span>
          </a>
          <button
            className="block md:hidden"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:gap-12 md:items-center`}
          >
            {navItems.map(({ path, title }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
            </li>
          ))}
        </ul>
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">Log in</Link>
          <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign Up</Link>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
