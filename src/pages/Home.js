import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import platziconfLogoImage from "../images/platziconf-logo.svg";
import astronautsImage from "../images/astronauts.svg";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <img
              src={platziconfLogoImage}
              alt="Platzi Conf Logo"
              className="img-fluid mb-2"
            />

            <h1 className="title">PRINT YOUR BADGES</h1>
            <h5> The easiest way to manage your conference</h5>
            <Link className="btn btn-primary button w-50" to="/badges">
              Start now
            </Link>
          </div>

          <div className="Home__col d-none d-md-block col-md-8">
            <img
              src={astronautsImage}
              alt="Astronauts"
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
