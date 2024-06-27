import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import LogoWhite from "../../assets/images/Logo-white.png";
import LogoBlack from "../../assets/images/Logo-black.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <ul className="left">
        {}
        <li>
          <Link to="/">
            <img src={scrolled ? LogoBlack : LogoWhite} alt="Logo" />
          </Link>
        </li>
      </ul>
      <ul className="center">
        <li>
          <Link to="/stores">Sân cầu lông</Link>
        </li>
        <li>
          <Link to="/news">Tin tức</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="/login">Đăng nhập</Link>
        </li>
        <li className="signup">
          <Link to="/signup">Đăng ký</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
