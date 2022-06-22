import React from "react";
import "./contact.css";
import buffer from "../../images/buffer.svg";
import { FaInbox, FaLocationArrow, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="info">
        <img src={buffer} alt="contact" />
        <div className="links">
          <p>
            <FaLocationArrow /> Thandizo Private Bag 7, Soche, Blantyre malawi
          </p>
          <p>
            <FaPhone /> +265 882 069 996
          </p>
          <p>
            <FaInbox /> hopemadziakapita@gmail.com
          </p>
        </div>
      </div>
      <div className="details">
        <div className="pane">
          <h2>Lets Build something amazing together!</h2>
          {/* <p>
            something something ,jjgkJDGLjLKdjlzgjlkzjvklzdxjvlxn mck lxjvioj
            frlkblvkjizjvknckijvzknvkc
            nvifjjvkjv;ijdfijkzjbkcjijxzknckjzxhbkjhzxjbhkxcvxiv vjzxvhkjz
          </p> */}
          <label for="name">Your Name</label>
          <input type="text" placeholder="" />
          <label for="name">email</label>
          <input type="text" placeholder="" />
          <label for="email">Subject</label>
          <input type="text" placeholder="" />
          <label for="name">Message</label>
          <textarea type="text" placeholder="" />
          <button className="btn">send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
