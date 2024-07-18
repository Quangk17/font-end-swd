import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./Nav.css";
import LogoWhite from "../../assets/images/Logo-white.png";
import LogoBlack from "../../assets/images/Logo-black.png";

const Nav = ({ isLoggedIn, onLogout, resetSearch }) => {
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

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Xác nhận",
      message: "Bạn muốn đăng xuất?",
      buttons: [
        {
          label: "Đăng xuất",
          onClick: () => onLogout(),
        },
        {
          label: "Quay lại",
        },
      ],
    });
  };

  const handleLogoClick = () => {
    resetSearch();
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <ul className="left">
        <li>
          <Link to="/" onClick={handleLogoClick}>
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
        {isLoggedIn && (
          <li>
            <Link to="/booking">Đặt sân</Link>
          </li>
        )}
      </ul>
      <ul className="right">
        {isLoggedIn ? (
          <li className="logout">
            <button onClick={handleLogoutClick}>Đăng xuất</button>
          </li>
        ) : (
          <>
            <li className="login">
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li className="signup">
              <Link to="/signup">Đăng ký</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
