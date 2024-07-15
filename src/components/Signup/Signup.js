import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LogoWhite from "../../assets/images/Logo-white.png";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
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
      setLoading(true);
      setMessage("");
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

        if (response.status === 200) {
          setErrors({});
          setMessage("Đăng ký thành công!");
          onSignup(email);
        } else {
          setErrors({
            apiError: "Đăng ký không thành công. Vui lòng thử lại.",
          });
        }
      } catch (error) {
        setMessage("");
        setErrors({
          apiError:
            error.response?.data?.message ||
            "Đăng ký không thành công. Vui lòng thử lại.",
        });
        console.error("Đăng ký không thành công:", error.response || error);
      } finally {
        setLoading(false);
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error" : ""}
            autoComplete="email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
          <label htmlFor="fullName">Họ và Tên</label>
          <input
            type="text"
            id="fullName"
            placeholder="Họ và Tên"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={errors.fullName ? "error" : ""}
            autoComplete="name"
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          <label htmlFor="phoneNumber">Số điện thoại</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Số điện thoại"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={errors.phoneNumber ? "error" : ""}
            autoComplete="tel"
          />
          {errors.phoneNumber && (
            <p className="error-text">{errors.phoneNumber}</p>
          )}
          <label htmlFor="gender">Giới tính</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={errors.gender ? "error" : ""}
            autoComplete="sex"
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
            autoComplete="new-password"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
          <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={errors.confirmPassword ? "error" : ""}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}
          {errors.apiError && <p className="error-text">{errors.apiError}</p>}
          {message && (
            <div className="custom-success-overlay">
              <div className="react-confirm-alert">
                <p className="react-confirm-alert-title">Thông báo</p>
                <p className="custom-success-message">{message}</p>
                <Link to="/login" className="custom-success-button">
                  Đăng nhập
                </Link>
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={loading || password !== confirmPassword}
          >
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </button>
        </form>
        <div className="login-link">
          <p className="had-account">
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
