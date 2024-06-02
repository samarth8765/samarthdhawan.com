import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Blogs from "./Blogs";

export default function Navbar() {
  return (
    <Router>
      <nav className="absolute dark:text-white text-black z-50 flex justify-center w-full bg-transparent">
        <ul className="dark:bg-black bg-white flex justify-center gap-6 sm:gap-12 items-center border rounded-full w-max p-6 sm:px-12 fixed left-1/2 -translate-x-1/2 top-5">
          <li className="cursor-pointer group transition duration-300 text-lg md:text-xl">
            <a href="#home">Home</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
          </li>
          <li className="cursor-pointer group transition duration-300 text-lg md:text-xl">
            <a href="#skills">Skills</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
          </li>
          <li className="cursor-pointer group transition duration-300 text-lg md:text-xl">
            <a href="#projects">Projects</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
          </li>
          <li className="cursor-pointer group transition duration-300 text-lg md:text-xl">
            <a href="#contact">Contact Me</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
          </li>
          <li className="cursor-pointer group transition duration-300 text-lg md:text-xl">
            <Link to={"/Blogs"}>Blogs</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
          </li>

          <li className="cursor-pointer group transition duration-300 text-lg md:text-xl">
            <a
              href="https://drive.google.com/file/d/1qtHYRnDEYOV09ZIvaFlZgpEVVUEc6AJB/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 dark:bg-white bg-black"></span>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
      </Routes>
    </Router>
  );
}
