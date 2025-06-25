import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };

    const navLinkStyles = ({ isActive }) => {
        return{
             fontWeight: isActive ? 'bold' : 'normal', 
            color: isActive ? 'rgb(255, 196, 72)' : 'rgb(110, 112, 113)',
        }   
    }

      const closeNav = () => {
    setIsNavOpen(false);
  };


    const iconStyle = {
        fontSize: '2em', // Adjust the font size
        color: '#FFC448', // Set the desired color
      
      };

    const githubProfileUrl = 'https://github.com/charmy-mwandy?tab=repositories'; 
    const linkedinProfileUrl = 'https://linkedin.com/in/charmaine-mwandiringa-719885264/'; 
      
 
    return(
        <>
        <div className="bg-white">

        <nav className="nav-bar bg-black h-full container flex items-center justify-between" id="nav-bar">
            <NavLink  to={'/'}>
                <img src= 'images/mainlogo.png'   alt="logo" className="logo w-14" />
            </NavLink>
            <div className=" hidden ">
             <p>Web Developer</p>
            </div>
             
                    <div className="nav-menu absolute top-0 left-0 min-h-[100vh] w-full bg-black/80 
                    backdrop-blur-sm  flex items-center justify-center duration-300">
                    <ul className=" flex flex-col items-center gap-5">
                        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
                        <NavLink style={navLinkStyles} to='/About'>About</NavLink>
                        <NavLink style={navLinkStyles} to='/Work'>Work</NavLink>
                        <NavLink style={navLinkStyles} to='/Contact'>Contact</NavLink>
                    </ul>  
                    </div>
                  

                    <div className="logos">
                        <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                            {/* <FaGithub style={iconStyle} /> */}
                        </a>
                        <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                            {/* <FaLinkedin style={iconStyle}  /> */}
                        </a>
                   
                    </div>
               
            <div className="text-xl sm:text-3xl">
              <i class="ri-menu-4-line"></i>
              {/* <i class="ri-menu-3-fill"></i> */}
            </div> 
        </nav>
        </div>
        
        </>
      
    );
}

export default Navbar; 
