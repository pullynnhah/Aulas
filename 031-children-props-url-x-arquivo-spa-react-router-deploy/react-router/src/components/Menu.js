import React from "react";

import NavHeader from "./NavHeader";
import {Link} from "react-router-dom";

export default function Menu() {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <NavHeader />
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {/* Refatore e use o <Link> do React Router no lugar dos <a> */}

            {/* '/features' deve renderizar FeaturesSection */}
            <li>
              <Link to="/features">Features</Link>
            </li>
            {/* '/services' deve renderizar ServicesSection */}
            <li>
              <Link to="/services">Services</Link>
            </li>
            {/* '/portfolio' deve renderizar PortfolioSection */}
            <li>
              <Link to="/portfolio">Gallery</Link>
            </li>
            {/* '/testimonials' deve renderizar TestimonialsSection */}
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            {/* '/team' deve renderizar TeamSection */}
            <li>
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
