import React from "react";
import {Link} from "react-router-dom";

export default function Banner() {
  return (
    <main id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  We are a Landing Page<span></span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec
                  ornare diam sed commodo nibh ante facilisis bibendum.
                </p>
                <Link to="/features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
