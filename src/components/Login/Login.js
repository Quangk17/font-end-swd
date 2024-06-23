import React, { useState } from "react";
import "./Login.css";
import { Helmet } from "react-helmet";
import LogoWhite from "../../assets/images/Logo-white.png";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>ShuttleX - Đăng nhập</title>
      </Helmet>
      <div className="banner">
        <button className="logo" onClick={() => (window.location.href = "/")}>
          <img
            src={LogoWhite}
            alt="LogoWhite"
            style={{ width: "100%", height: "100%" }}
          />
        </button>
        <h2> </h2>
      </div>
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot-password">
            <a href="/forgotpass">Quên mật khẩu?</a>
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
        <div className="no-account">
          <p>
            Chưa có tài khoản? <a href="/signup">Đăng ký</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
