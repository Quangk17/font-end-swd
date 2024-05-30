import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav>
    <ul className="left">
      <li><Link to="/">Trang chủ</Link></li>
      <li><Link to="/courts">Sân cầu lông</Link></li>
    </ul>
    <ul className="right">
      <li><Link to="/login">Đăng nhập</Link></li>
      <li><Link to="/signup">Đăng ký</Link></li>
    </ul>
  </nav>
);

export default Nav;