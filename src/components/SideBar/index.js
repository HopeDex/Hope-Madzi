import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./side.css";
const SideBar = ({ isOpen, toggleOpen }) => {
  return (
    <div id="caside" isOpen={isOpen}>
      <div className="icon" onClick={toggleOpen}>
        <FaTimesCircle />
      </div>
      <div className="swrapper">
        <ul className="smenu">
          <Link className="sroute" to="/" onClick={toggleOpen}>
            Home
          </Link>
          <Link className="sroute" to="/about" onClick={toggleOpen}>
            About
          </Link>
          <Link className="sroute" to="/skills" onClick={toggleOpen}>
            skills
          </Link>
          <Link className="sroute" to="/projects" onClick={toggleOpen}>
            Projects
          </Link>
          <Link className="sroute" to="/contact" onClick={toggleOpen}>
            Contact
          </Link>
        </ul>
        {/* <SBtnWrap>
          <SRoute to="/download">Download cv</SRoute>
        </SBtnWrap> */}
      </div>
    </div>
  );
};

export default SideBar;
