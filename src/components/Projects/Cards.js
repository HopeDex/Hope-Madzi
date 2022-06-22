import React from "react";
import "./projects.css";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
const Cards = ({ desc, img }) => {
  return (
    <div className="card">
      <img src={img} alt="Avatar" className="image" />
      <div className="fefe">
        <p>
          <svg
            id="Component_1_1"
            data-name="Component 1 – 1"
            xmlns="http://www.w3.org/2000/svg"
            width="489.9"
            height="710"
            viewBox="0 0 489.9 710"
          >
            <g id="wristwatch-svgrepo-com" transform="translate(-0.05)">
              <g id="Group_2" data-name="Group 2">
                <g id="Group_1" data-name="Group 1">
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M385.75,371.4l-16.3-15.9a166.377,166.377,0,0,0-7-227.9c-64.6-65.3-170.3-65.3-235.3-.4s-64.9,170.7,0,235.7c63,62.6,163.3,64.9,228.7,6.6l15.9,15.9-16.3,16.3,19.1,19.1,46.3-46.3-19.1-19.1Zm-232.2-35a129.259,129.259,0,1,1,182.8,0A129.04,129.04,0,0,1,153.55,336.4Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M307.25,168.8,237.95,238a10.83,10.83,0,0,0-2.7,9.7l13.6,51.3a9.656,9.656,0,0,0,12.1,7c5.4-1.6,8.6-7,7-12.1l-12.1-46.3,65.3-64.9a9.829,9.829,0,1,0-13.9-13.9Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M489.95,116.7,373.35,0l-54.4,54.8-10.6-10.5-31.1,17.1c37.7,6.6,72.3,24.1,99.6,51.7,27.6,27.6,45.5,62.2,51.7,99.6l17.1-31.1-10.5-10.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M61.45,277.3l-17.1,31.1,10.5,10.5L.05,373.3,116.65,490l54.4-54.8,10.5,10.5,31.1-17.1c-37.7-6.6-72.3-24.1-99.6-51.7C85.55,349.2,67.65,314.6,61.45,277.3Z"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
            <text
              id="BWE"
              transform="translate(0 660)"
              fill="#fff"
              font-size="200"
              font-family="SegoeUI-Bold, Segoe UI"
              font-weight="700"
            >
              <tspan x="0" y="0">
                BWE
              </tspan>
            </text>
          </svg>
        </p>
      </div>
      <div class="overlay">
        <div class="text">
          <p>{desc}</p>
          <button>
            Visit Website <BsGlobe />
          </button>
          <button>
            View Code <AiOutlineGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
