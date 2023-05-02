import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <header>
        <nav className="flexSB">
          <div className="logo">
            <h1>logo</h1>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/courses">Tous les cours</Link>
            </li>
            <li>
              <Link to="/marketplace">Place de marché</Link>
            </li>

          </ul>
          <li>
            <a href="SignIn" className="button-28">
              Se connecter
            </a>
          </li>
        </nav>
      </header>

      <section className="head">
        <div className="container flexSB">
          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="far fa-envelope icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
