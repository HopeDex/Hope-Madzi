import React from "react";
import About from "../About";
import Nav from "../Nav";
import { useState } from "react";
import SideBar from "../SideBar";
const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.getElementById("caside").style.opacity = "100%";
      document.getElementById("caside").style.top = "0";
    } else if (!isOpen) {
      document.getElementById("caside").style.opacity = "0%";
      document.getElementById("caside").style.top = "-100%";
    }
  };
  return (
    <div>
      <SideBar isOpen={isOpen} toggleOpen={toggleOpen} />
      <Nav toggleOpen={toggleOpen} />
      <About />
    </div>
  );
};

export default AboutPage;
