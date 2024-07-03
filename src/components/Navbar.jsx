import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import { DarkModeButton } from "../components";
import "@theme-toggles/react/css/Classic.css"
import { Around } from "@theme-toggles/react"
const Navbar = ({ toggleDarkMode }) => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-10 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
      <DarkModeButton toggleDarkMode={toggleDarkMode} />

    </header>
  );
};

export default Navbar;
