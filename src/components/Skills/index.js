import React from "react";
import "./skills.css";
import { FaFacebook } from "react-icons/fa";
import s from "../../images/1.svg";
import ss from "../../images/2.svg";
import sss from "../../images/3.svg";
import ssss from "../../images/4.svg";
import s5 from "../../images/5.svg";
import s6 from "../../images/6.svg";
import s7 from "../../images/7.svg";
import s8 from "../../images/8.svg";
import s9 from "../../images/9.svg";
import ss1 from "../../images/11.svg";
import ss2 from "../../images/12.svg";
import ss3 from "../../images/13.svg";
import ss4 from "../../images/111.svg";
const Skills = () => {
  return (
    <div className="skills">
      <div className="upper">
        <h1>Skills</h1>
        <div className="skill">
          <ul className="slist">
            <li>
              <h5>Front-End</h5>{" "}
              <div className="bar">
                <div className="progress" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li>
              <h5>Back-End</h5>
              <div className="bar">
                <div className="progress" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li>
              <h5>UI/UX Designing</h5>
              <div className="bar">
                <div className="progress" style={{ width: "50%" }}></div>
              </div>
            </li>
            <li>
              <h5>Teaching</h5>
              <div className="bar">
                <div className="progress" style={{ width: "70%" }}></div>
              </div>
            </li>
            <li>
              <h5>Game Development</h5>
              <div className="bar">
                <div className="progress" style={{ width: "20%" }}></div>
              </div>
            </li>
            <li>
              <h5>Linux Administration</h5>
              <div className="bar">
                <div className="progress" style={{ width: "50%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="lower">
        <h1>Tools and Languages</h1>
        <div className="tools">
          <img src={s} alt="tool" />
          <img src={ss} alt="tool" />
          <img src={sss} alt="tool" />
          <img src={ssss} alt="tool" />
          <img src={s5} alt="tool" />
          <img src={s6} alt="tool" />
          <img src={s7} alt="tool" />
          <img src={s8} alt="tool" />
          <img src={s9} alt="tool" />
          <img src={s6} alt="tool" />
          <img src={s7} alt="tool" />
          <img src={s8} alt="tool" />
          <img src={s9} alt="tool" />
          <img src={s6} alt="tool" />
          <img src={s7} alt="tool" />
          <img src={s8} alt="tool" />
          <img src={s9} alt="tool" />
          <img src={ss1} alt="tool" />
          <img src={ss2} alt="tool" />
          <img src={ss3} alt="tool" />
          <img src={ss4} alt="tool" />
          <img src={s} alt="tool" />
          <img src={s} alt="tool" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
