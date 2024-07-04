import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200 dark:border-slate-700' />

      <div className='footer-container no-select text-black dark:text-white'>
        <p>
          © 2024 <strong>João Pinto</strong>
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target={link.name === 'Contact' ? '_self' : '_blank'} rel="noopener noreferrer">
              <link.icon className={`w-6 h-6 object-contain ${link.color}`} alt={link.name} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
