import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#FFC448" : "#6E7071",
  });

  const githubProfileUrl = "https://github.com/charmy-mwandy?tab=repositories";
  const linkedinProfileUrl = "https://linkedin.com/in/charmaine-mwandiringa-719885264/";

  return (
    <>
      {/* Main vertical sidebar (desktop) */}
      <div className="hidden lg:flex flex-col bg-black text-white w-64 h-screen fixed top-0 left-0 px-6 py-10 gap-10 z-50">
        <NavLink to="/">
          <img src="images/mainlogo.png" alt="logo" className="w-14 mb-8" />
        </NavLink>

        <nav className="flex flex-col gap-6 text-lg">
          <NavLink to="/" style={navLinkStyles}>Home</NavLink>
          <NavLink to="/About" style={navLinkStyles}>About</NavLink>
          <NavLink to="/Work" style={navLinkStyles}>Work</NavLink>
          <NavLink to="/Contact" style={navLinkStyles}>Contact</NavLink>
        </nav>

        <div className="mt-auto flex gap-4">
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill text-2xl text-[#FFC448]"></i>
          </a>
          <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill text-2xl text-[#FFC448]"></i>
          </a>
        </div>
      </div>

      {/* Hamburger Icon (mobile only) */}
      <div className="lg:hidden fixed top-4 right-4 z-[100]">
  <i
    onClick={toggleNav}
    className={`ri-${isNavOpen ? "close-large-fill" : "menu-4-line"} text-3xl text-[#FFC448] cursor-pointer`}
  ></i>
</div>

      {/* Full-screen overlay menu (mobile only) */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-full bg-black/95 text-white transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl">
          <NavLink to="/" onClick={() => setIsNavOpen(false)} style={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/About" onClick={() => setIsNavOpen(false)} style={navLinkStyles}>
            About
          </NavLink>
          <NavLink to="/Work" onClick={() => setIsNavOpen(false)} style={navLinkStyles}>
            Work
          </NavLink>
          <NavLink to="/Contact" onClick={() => setIsNavOpen(false)} style={navLinkStyles}>
            Contact
          </NavLink>

          <div className="flex gap-6 pt-10">
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
              <i className="ri-github-fill text-3xl text-[#FFC448]"></i>
            </a>
            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-box-fill text-3xl text-[#FFC448]"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
