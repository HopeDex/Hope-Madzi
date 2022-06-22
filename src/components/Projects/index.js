import React from "react";
import "./projects.css";
import { homeObjOne } from "./Data";
import Cards from "./Cards";
const Projects = () => {
  return (
    <div className="projects">
      <h1>my recent work</h1>
      <div className="wrapper">
        <Cards {...homeObjOne} />
        <Cards {...homeObjOne} />
        <Cards {...homeObjOne} />
        <Cards {...homeObjOne} />
        <Cards {...homeObjOne} />
        <Cards {...homeObjOne} />
      </div>
      <div className="btw">
      <button className="btn1">see more on github</button>
      </div>
      
    </div>
  );
};

export default Projects;
