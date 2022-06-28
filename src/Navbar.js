import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);
  const linksRef = useRef(null);

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

  //calculates the height of the links container
  //-----ensure you include height: auto !important for desktop to prevent override
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; //gets dimension of the Dom node in current(links)
    if (show) {
      containerRef.current.style.height = `${linksHeight}px`; //ref.current allows us to access dom properites with dot notation
    } else {
      containerRef.current.style.height = `${0}px`;
    }
  }, [show]);

  ////------html page--------////

  return (
    <nav className="nav-center">
      <header className="nav-header">
        <img className="logo" src={logo} alt="coding-addict" />
        <button className="nav-toggle" onClick={() => setShow(!show)}>
          <FaBars />
        </button>
      </header>

      <div //note: we need a container to wrap ul to be able to perform dynmaic logic
        ref={containerRef}
        className="links-container" //we can use conditional rendering of container size (static size)
      >
        <ul ref={linksRef} className="links">
          {pages}
        </ul>
      </div>

      <ul className="social-icons"> {socialLinks}</ul>
    </nav>
  );
};

export default Navbar;
