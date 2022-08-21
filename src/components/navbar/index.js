import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import { wissterlogo, logomark } from "../../assets";
import { SideNav } from "../sidenav";
const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className="navWrap">
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={wissterlogo} />
          </Link>
          <div className="nav-icon" onClick={handleClick}>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <SideNav isModalOpen={click} onClose={Close} />
    </div>
  );
};
export { NavBar };
