import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký
    onSignup({ username, password, fullName, phoneNumber });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Đăng ký</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Số điện thoại" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <input type="text" placeholder="Họ và Tên" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Nhập lại mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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