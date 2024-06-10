import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Tên đăng nhập không được để trống';
    if (!password) newErrors.password = 'Mật khẩu không được để trống';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Mật khẩu không khớp';
    if (!fullName) newErrors.fullName = 'Họ và Tên không được để trống';
    if (!phoneNumber) newErrors.phoneNumber = 'Số điện thoại không được để trống';
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
      <div className="banner">
        <button className="home-button" onClick={() => window.location.href = '/'}>
          <FontAwesomeIcon icon={faHome} />
        </button>
        <h2> </h2>
      </div>
      <div className="signup-box">
        <h2>Đăng ký</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Số điện thoại" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={errors.phoneNumber ? 'error' : ''} />
          {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
          <input type="text" placeholder="Họ và Tên" value={fullName} onChange={(e) => setFullName(e.target.value)} className={errors.fullName ? 'error' : ''} />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} className={errors.username ? 'error' : ''} />
          {errors.username && <p className="error-text">{errors.username}</p>}
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} className={errors.password ? 'error' : ''} />
          {errors.password && <p className="error-text">{errors.password}</p>}
          <input type="password" placeholder="Nhập lại mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={errors.confirmPassword ? 'error' : ''} />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
          <button type="submit" disabled={password !== confirmPassword}>Đăng ký</button>
        </form>
        <div className="login-link">
          <p className="had-account">Bạn đã có tài khoản? <a href="/login">Đăng nhập</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;