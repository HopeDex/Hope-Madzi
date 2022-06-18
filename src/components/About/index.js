import React from "react";
import "./about.css";
import hope from "../../images/hope.png";
import so from "../../images/so.svg";
import soo from "../../images/soo.svg";
import soc from "../../images/soc.svg";
import sco from "../../images/sco.svg";
import socc from "../../images/socc.svg";
const About = () => {
  return (
    <div className="about">
      <div className="image">
        <img src={hope} alt="Owner Of website" />
      </div>
      <div className="glass">
        <h1>HOPE MADZIAKAPITA</h1>
        <small>
          Blantyre, Malawi. <span>hopemadziakapita@gmail.com</span>
        </small>
        <p>
          hi im hope , i completed my bachelors in eduction science with a major
          in computer science from the unim, I am interested in opportunities
          where i can use my scuh such skils, my range of academic experiences
          allow me to bring a diverse set of skills that i am held accountable.
          i work to contribute to innovtions of positive change when im not
          working, youll find me playing games.{" "}
        </p>
        <p>
          hi im hope , i completed my bachelors in eduction science with a major
          in computer science from the unim, I am interested in opportunities
          where i can use my scuh such skils, my range of academic experiences
          allow me to bring a diverse set of skills that i am held accountable.
          i work to contribute to innovtions of positive change when im not
          working, youll find me playing games.{" "}
        </p>
        <p>
          hi im hope , i completed my bachelors in eduction science with a major
          in computer science from the unim, I am interested in opportunities
          where i can use my scuh such skils, my range of academic experiences
          allow me to bring a diverse set of skills that i am held accountable.
          i work to contribute to innovtions of positive change when im not
          working, youll find me playing games.{" "}
        </p>
        <div className="soc">
          <img src={so} alt="soc" />
          <img src={soc} alt="soc" />
          <img src={soo} alt="soc" />
          <img src={socc} alt="soc" />
          <img src={sco} alt="soc" />
        </div>
      </div>
    </div>
  );
};

export default About;
