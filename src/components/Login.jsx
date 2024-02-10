import React, { useState } from 'react';
import building from "../assets/images/building.png";
import { Link } from 'react-router-dom';

function Login() {
    
    

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission logic here, like API calls or validation
        console.log(formData);
    };

    return (
        <div className='login'>
            <div className="login-content">
                <div className="login-content__head">
                    <h1 className="">Register</h1>
                </div>
                <form onSubmit={handleSubmit} className="form" id='register'>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" />
                    </div>
                    <div className="form-item">
                        <p className="">Already have an account? 
                            <Link className='link' to="/login"> Log In</Link>
                        </p>
                        <button type="submit" className="button">Login</button>
                    </div>
                </form>
            </div>
            <div className="login-img">
                <img src={building} alt="Building" />
            </div>
        </div>
    );
}

export default Login;


