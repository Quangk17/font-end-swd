import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="forgot-password">
            <a href="#">Quên mật khẩu?</a>
        </div>
          <button type="submit">Đăng nhập</button>
        </form>
        <div className="no-account">
          <p>Chưa có tài khoản? <a href="/signup">Đăng ký</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;