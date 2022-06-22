import React, { useState } from "react";
import Nav from "../Nav";
import Contact from "../Contact";
import SideBar from "../SideBar";
const ContactPage = () => {
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
      <Contact />
    </div>
  );
};

export default ContactPage;
