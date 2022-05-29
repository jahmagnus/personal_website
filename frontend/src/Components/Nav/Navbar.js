import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [homeActive, setHome] = useState(false);
  const [projectsActive, setProject] = useState(false);
  const [contactActive, setContact] = useState(false);

  console.log("outside", homeActive, projectsActive, contactActive);
 
  

  return (
    <div className="ui inverted segment" id="navbar-id">
      <div className="ui inverted secondary pointing menu">
        
        
        <Link
          className="item"
          activeClass = "active"
          to="bkg"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>

        <Link
          className="item"
          activeClass="active"
          to="bkg-project"
          spy={true}
          smooth={true}
          duration={500}
          offset={35}
          
        >
          Projects
        </Link>

        <Link
          className="item"
          activeClass="active"
          to="bkg-contact"
          spy={true}
          smooth={true}
          offset={200}
          
          
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
