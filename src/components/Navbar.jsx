import { NavLink } from "react-router-dom";
import { DarkModeButton } from "../components";
import "@theme-toggles/react/css/Classic.css";
import { FaHome } from "react-icons/fa";
const Navbar = ({ toggleDarkMode }) => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <FaHome className='text-4xl text-black dark:text-white' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-500 no-select" : "text-black dark:text-white no-select"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-500 no-select" : "text-black dark:text-white no-select"}>
          Projects
        </NavLink>
      </nav>
      <DarkModeButton toggleDarkMode={toggleDarkMode} />

    </header>
  );
};

export default Navbar;
