import React, { useState } from 'react';
import './Login.css'; // Create a CSS file for styling

const Login = () => {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div className="login-container">
      <div className="user-type-selector">
        <button
          className={`user-type-button ${userType === 'student' ? 'active' : ''}`} onClick={() => handleUserTypeChange('student')} >  Student </button> <button
          className={`user-type-button ${userType === 'teacher' ? 'active' : ''}`}onClick={() => handleUserTypeChange('teacher')} >Teacher </button></div>
    
      {userType && (
        <div className="login-form-container">

          <h2>{userType.charAt(0).toUpperCase() + userType.slice(1)} Login</h2>
          
          <form className="login-form">

            <div className="form-group">

              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />

            </div>
            <div className="form-group">

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />

            </div>

            <button type="submit">Login</button>

          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
