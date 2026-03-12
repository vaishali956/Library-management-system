import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Backend API call
      const response = await axios.post('http://localhost:5000/api/login', {
        userId: userId.trim(),
        password: password.trim()
      });

      const userRole = response.data.role;

      if (userRole === 'admin') {
        navigate('/admin-home');
      } else if (userRole === 'user') {
        navigate('/user-home');
      }
          
    } catch (error) {
      console.error("Login Error:", error);
      alert('Login Failed: Invalid ID or Password');
    }
  };

  return (
    /* full-page-wrapper ensures 100vh/100vw, center-content keeps card in middle */
    <div className="full-page-wrapper center-content">
      <div className="login-card">
        {/* Visual Icon for Library */}
        <div style={{ fontSize: '50px', marginBottom: '10px' }}>📚</div>
        
        <h2 style={{ color: '#2c3e50', marginBottom: '5px' }}>Library System</h2>
        <p style={{ fontSize: '14px', color: '#7f8c8d', marginBottom: '10px' }}>
          Please enter your credentials to continue
        </p>
        <p style={{ fontSize: '14px', color: '#7f8c8d', marginBottom: '20px' }}>
          Testing ID: 'adm' for Admin | 'user' for User
        </p>
                
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>User ID</label>
            <input 
              type="text" 
              placeholder="Username (adm/user)" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit" style={{ marginTop: '10px' }}>
            Login to Account
          </button>
        </form>

        <div style={{ marginTop: '25px', fontSize: '12px', }}>
          <p style={{ marginTop: '10px' }}>© 2026 Library Management System</p>
        </div>
      </div>
    </div>
  );
}

export default Login;