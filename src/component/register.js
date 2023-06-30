import React from 'react';
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
    const navigate = useNavigate()
    return (
        <div className="pertama">

            <div className="container">
                <div className="wrapper">
                    <div className="title"><span>Login Form</span></div>
                    <form id="register-form" action="#">
                        {/* Formulir registrasi */}
                        {/* ... kode HTML formulir registrasi ... */}
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Full Name" required />
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <div className="row button">
                            <input type="submit" value="Register" />
                        </div>
                        <div className="signup-link">
                            Already a member? <span onClick={() => navigate('/login')}>Login now</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
