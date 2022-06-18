import React from "react";
import { useState } from "react";
import "./nav.css";
const Nav = () => {
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
              <h1>HOPE</h1>
            </li>
          </ul>
          <ul className="nav-menu">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
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
        </div>
      </nav>
    </>
  );
};

export default Nav;
