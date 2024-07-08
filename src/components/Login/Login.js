import React, { useState } from "react";
import "./Login.css";
import { Helmet } from "react-helmet";
import LogoWhite from "../../assets/images/Logo-white.png";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginAPI = await axios.post(
        "http://localhost:5236/api/Authentication/Login",
        {
          email,
          password,
        }
      );

      let response = await loginAPI("quangbui300323@gmail.com", "string");
      if (response && response.token) {
        localStorage.setItem("token", response.token);
      }
      console.log(">>> check login: ", response);

      // const response = (email, password) => {
      //   return axios.post("http://localhost:5236/api/Authentication/Login", {
      //     email,
      //     password,
      //   });
      // };

      // console.log(response.data);
      // localStorage.setItem("token", response.data.token);

      onLogin(email);
    } catch (error) {
      setError(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập."
      );
      console.error("Đăng nhập không thành công:", error);
    }
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          {error && <p className="error-message">{error}</p>}
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
