import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>ShuttleX - Đăng nhập</title>
      </Helmet>
      <div className="banner">
        <button className="home-button" onClick={() => window.location.href = '/'}>
          <FontAwesomeIcon icon={faHome} />
        </button>
        <h2> </h2>
      </div>
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="forgot-password">
            <a href="/forgotpass">Quên mật khẩu?</a>
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