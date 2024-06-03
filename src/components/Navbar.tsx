import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Blogs from "./Blogs";

export default function Navbar() {
  return (
    <Router>
      <nav className="absolute dark:text-white text-black z-50 flex justify-center w-full bg-transparent">
        <div className="fixed left-0 right-0 top-5 mx-auto p-4 sm:px-12 bg-white dark:bg-black border rounded-full flex justify-center gap-4 sm:gap-8 items-center max-w-screen-md">
          <div className="flex overflow-x-auto no-scrollbar w-full sm:w-auto">
            <ul className="flex gap-4 sm:gap-8">
              <li className="whitespace-nowrap cursor-pointer group transition duration-300 text-base sm:text-lg md:text-xl">
                <a href="#home">Home</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
              </li>
              <li className="whitespace-nowrap cursor-pointer group transition duration-300 text-base sm:text-lg md:text-xl">
                <a href="#skills">Skills</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
              </li>
              <li className="whitespace-nowrap cursor-pointer group transition duration-300 text-base sm:text-lg md:text-xl">
                <a href="#projects">Projects</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
              </li>
              <li className="whitespace-nowrap cursor-pointer group transition duration-300 text-base sm:text-lg md:text-xl">
                <a href="#contact">Contact Me</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
              </li>
              <li className="whitespace-nowrap cursor-pointer group transition duration-300 text-base sm:text-lg md:text-xl">
                <Link to={"/Blogs"}>Blogs</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
              </li>
              <li className="whitespace-nowrap cursor-pointer group transition duration-300 text-base sm:text-lg md:text-xl">
                <a
                  href="https://drive.google.com/file/d/1qtHYRnDEYOV09ZIvaFlZgpEVVUEc6AJB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
      </Routes>
    </Router>
  );
}
