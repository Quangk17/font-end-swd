import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LogoWhite from "../../assets/images/Logo-white.png";
import "./Signup.css";
import axios from "axios";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Tên đăng nhập không được để trống";
    if (!email) newErrors.email = "Email không được để trống";
    if (!password) newErrors.password = "Mật khẩu không được để trống";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Mật khẩu không khớp";
    if (!fullName) newErrors.fullName = "Họ và Tên không được để trống";
    if (!phoneNumber)
      newErrors.phoneNumber = "Số điện thoại không được để trống";
    if (!gender) newErrors.gender = "Giới tính không được để trống";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:5236/api/Authentication/Register",
          {
            name: fullName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            gender: gender,
          }
        );

        // Xử lý phản hồi từ server, ví dụ: hiển thị thông báo thành công
        console.log(response.data);
        setMessage(
          "Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản."
        );
        onSignup(username); // Gọi callback onSignup khi đăng ký thành công
      } catch (error) {
        setErrors({ apiError: "Đăng ký không thành công. Vui lòng thử lại." });
        console.error("Đăng ký không thành công:", error);
      }
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
          <label htmlFor="phoneNumber">Số điện thoại</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Số điện thoại"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={errors.phoneNumber ? "error" : ""}
          />
          {errors.phoneNumber && (
            <p className="error-text">{errors.phoneNumber}</p>
          )}
          <label htmlFor="fullName">Họ và Tên</label>
          <input
            type="text"
            id="fullName"
            placeholder="Họ và Tên"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={errors.fullName ? "error" : ""}
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={errors.username ? "error" : ""}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
          <label htmlFor="gender">Giới tính</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={errors.gender ? "error" : ""}
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
          {errors.gender && <p className="error-text">{errors.gender}</p>}
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
          <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}
          {errors.apiError && <p className="error-text">{errors.apiError}</p>}
          {message && <p className="success-text">{message}</p>}
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
