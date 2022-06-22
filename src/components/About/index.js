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
      <div className="pp">
        <img src={hope} alt="Owner Of website" />
      </div>
      <div className="glass">
        <h1>
          HOPE <em>MADZIAKAPITA</em>
        </h1>
        <small>
          Blantyre, Malawi. <span>hopemadziakapita@gmail.com</span>
        </small>
        <p>
          Hi I'm Hope Dexter Madziakapita, my computer science journey started
          at the National College of Information <em>{"(NACIT) "}</em> where I
          did my level 4 Diploma in Computing, then I completed my BEd. in
          computer science at the University of Malawi <em>{"(UNIMA)"}</em> in
          2022. I am interested in opportunities where i can apply my skils, my
          range of academic experiences allow me to bring a diverse set of
          skills that I am held accountable. I work to contribute to innovtions
          of positive change.{" "}
        </p>
        <p>
          When I'm not working you'll find me playing computer games and
          watching japanese anime. In summer I love piloting my drone to catch
          nice sunset and sunrise views, I also play a little volleyball to stay
          fit. I have been exploring content writing though well clearly writing
          is not my thing. I love reading articles to stay up-to-date with this
          ever evolving tech-world.
        </p>
        <p>I have a passion for web development, developing modern UIs that </p>
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
