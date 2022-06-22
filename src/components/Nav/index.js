import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaBars } from "react-icons/fa";
const Nav = ({ toggleOpen }) => {
  const [bg, setBg] = useState("");
  const change = () => {
    setBg.value = "hp";
    console.log(bg);
  };
  return (
    <>
      <nav>
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="navLogo">
              <Link to="/">
                <h1>HOPE</h1>
              </Link>
            </li>
          </ul>
          <ul className="nav-menu">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          <ul className="nav-menu">
            <li>
              <input
                id="toggle"
                className="toggle"
                type="checkbox"
                onClick={() => change()}
              />
            </li>
            <li>
              <label htmlFor="toggle" className="title">
                DARK
              </label>
            </li>
          </ul>
          <div className="pnav">
            <FaBars onClick={toggleOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
