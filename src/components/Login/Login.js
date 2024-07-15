import React, { useState } from "react";
import "./Login.css";
import { Helmet } from "react-helmet";
import LogoWhite from "../../assets/images/Logo-white.png";
import toastr from "toastr";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //     if (!email || !password) {
    //       toastr.error("Email và Mật khẩu là bắt buộc!", "Gặp lỗi!");
    //       return;
    //     }

    //     try {
    //       const loginAPI = (email, password) => {
    //         return axios.post("http://localhost:5236/api/Authentication/Login", {
    //           email,
    //           password,
    //         });
    //       };

    //       let response = await loginAPI(email, password);
    //       if (response && response.data && response.data.token) {
    //         localStorage.setItem("token", response.data.token);
    //         console.log(">>> check login: ", response);
    //         alert("Login successfully");
    //         navigate("/");
    //       } else {
    //         toastr.error("Đăng nhập không thành công!", "Gặp lỗi!");
    //       }
    //     } catch (error) {
    //       toastr.error("Đăng nhập không thành công!", "Gặp lỗi!");
    //       console.error("Đăng nhập không thành công:", error);
    //     }
    //   };

    if (!email || !password) {
      toastr.error("Email và Mật khẩu là bắt buộc!", "Gặp lỗi!");
      return;
    }

    if (email === "quangbui300323@gmail.com" && password === "string") {
      localStorage.setItem("token", "fake-token");
      // alert("Login successfully");
      onLogin();
      navigate("/");
    } else {
      toastr.error("Đăng nhập không thành công!", "Gặp lỗi!");
    }
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>ShuttleX - Đăng nhập</title>
      </Helmet>
      <div className="banner">
        <button className="logo" onClick={() => (window.location.href = "/")}>
          <img src={LogoWhite} alt="LogoWhite" />
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
