import React, {useState}from "react";

import './Login.css';



const Login = () => {
    const [userType, setUserType] = useState('');
  
    const handleUserTypeChange = (type) => {
      setUserType(type);
    };
  return (

        <div className="login-container">
            <div className="user-type-selector">

            <button className={`user-type-button ${userType === 'student' ? 'active' : ''}`} onClick={() => handleUserTypeChange('student')}>  Student  </button>
            <button className={`user-type-button ${userType === 'teacher' ? 'active' : ''}`}onClick={() => handleUserTypeChange('teacher')} > Teacher</button>
           
            </div>


        </div>
  )
}

export default Login
    