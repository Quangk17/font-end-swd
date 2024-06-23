import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LogoWhite from "../../assets/images/Logo-white.png";
import "./Signup.css";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Tên đăng nhập không được để trống";
    if (!password) newErrors.password = "Mật khẩu không được để trống";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Mật khẩu không khớp";
    if (!fullName) newErrors.fullName = "Họ và Tên không được để trống";
    if (!phoneNumber)
      newErrors.phoneNumber = "Số điện thoại không được để trống";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 ? true : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký
    if (validateForm()) {
      onSignup({ username, password, fullName, phoneNumber });
    }
  };

  return (
    <div className="signup-container">
      <Helmet>
        <title>ShuttleX - Đăng ký</title>
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
      <div className="signup-box">
        <h2>Đăng ký</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Số điện thoại</label>
          <input
            type="text"
            placeholder="Số điện thoại"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={errors.phoneNumber ? "error" : ""}
          />
          {errors.phoneNumber && (
            <p className="error-text">{errors.phoneNumber}</p>
          )}
          <label htmlFor="username">Họ và Tên</label>
          <input
            type="text"
            placeholder="Họ và Tên"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={errors.fullName ? "error" : ""}
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={errors.username ? "error" : ""}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
          <label htmlFor="username">Mật khẩu</label>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
          <label htmlFor="username">Nhập lại mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}
          <button type="submit" disabled={password !== confirmPassword}>
            Đăng ký
          </button>
        </form>
        <div className="login-link">
          <p className="had-account">
            Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
