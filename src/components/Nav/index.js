import React from "react";
import "./nav.css";
const Nav = () => {
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
              <svg
                id="Component_6_1"
                data-name="Component 6 – 1"
                width="80"
                height="68"
                viewBox="0 0 80 68"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.022"
                    y1="0.348"
                    x2="0.927"
                    y2="0.913"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" />
                    <stop offset="0.542" stop-color="#4900ad" />
                    <stop offset="0.745" stop-color="#0808e1" />
                    <stop offset="1" stop-color="#0808e1" />
                  </linearGradient>
                </defs>
                <path
                  id="Path_105"
                  data-name="Path 105"
                  d="M40,0A46.226,46.226,0,0,1,56.615,3.063C70.3,8.285,80,20.18,80,34c0,18.778-17.909,34-40,34S0,52.778,0,34,17.909,0,40,0Z"
                  fill="#fff"
                />
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M19.889,17.1A25.992,25.992,0,0,1,25.062,1.433.888.888,0,0,0,24.41,0L24.1,0C10.83,0,.063,11.262,0,25.179-.062,39.063,10.639,50.465,23.866,50.6A23.425,23.425,0,0,0,40.74,43.607a.9.9,0,0,0-.453-1.509c-11.553-1.871-20.4-12.351-20.4-25"
                  transform="translate(19.5 8.7)"
                  fill="url(#linear-gradient)"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
