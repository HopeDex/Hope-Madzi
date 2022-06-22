import React from "react";
import Hero from "../Hero";
import Nav from "../Nav";
import SideBar from "../SideBar";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.getElementById("caside").style.opacity = "0%";
      document.getElementById("caside").style.top = "-100%";
    } else if (!isOpen) {
      document.getElementById("caside").style.opacity = "100%";
      document.getElementById("caside").style.top = "0";
    }
  };
  return (
    <div style={{ height: "100%" }}>
      <SideBar isOpen={isOpen} toggleOpen={toggleOpen} />
      <Nav toggleOpen={toggleOpen} />
      <Hero />
    </div>
  );
};

export default Home;
