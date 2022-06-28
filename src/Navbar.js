import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navRef = useRef();

  // useEffect(() => console.log(navRef.current.className = ), []);

  const pages = links.map((x) => (
    <a key={x.id} href={x.url}>
      {x.text}
    </a>
  ));

  const socialLinks = social.map((x) => (
    <a key={x.id} href={x.url}>
      {x.icon}
    </a>
  ));

  ////------html page--------////

  return (
    <nav className="nav-center">
      <header className="nav-header">
        <img className="logo" src={logo} alt="coding-addict" />
        <button className="nav-toggle" onClick={() => setShow(!show)}>
          <FaBars />
        </button>
      </header>

      <div
        ref={navRef}
        className={`${show && "show-container"}  ${"links-container"}`}
      >
        <ul className="links">{pages}</ul>
      </div>

      <ul className="social-icons"> {socialLinks}</ul>
    </nav>
  );
};

export default Navbar;
