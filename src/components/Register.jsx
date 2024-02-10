import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import building from "../assets/images/building.png";

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    accountType: 'Seller',
    phoneNumber: ''
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
                <h1 className="">Buy/Sell your Property today!</h1>
            </div>
            <form onSubmit={handleSubmit} className="form" id='register'>
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Full Name" />
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email-id</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email-Id" />
                </div>
                <div className="form-item">
                    <label htmlFor="password">Create Password</label>
                    <input required type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create Password" />
                </div>
                <div className='form-item'>
                    <label htmlFor="accountType">Account Type</label>
                    <select name="accountType" value={formData.accountType} onChange={handleChange}>
                        <option value="Seller">Seller</option>
                        <option value="Buyer">Buyer</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input required type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter Phone No." />
                </div>
                <div className="form-item">
                    <p className="">Already have an account? 
                        <Link className='link' to="/login"> Login</Link>
                    </p>
                    <button type="submit" className="button">Register</button>
                </div>
            </form>
        </div>
        <div className="login-img">
            <img className="o1" src={building} alt="Building" />
            <img className="o2" src={building} alt="Building" />
            <img className="o3" src={building} alt="Building" />
        </div>
    </div>


    
);
}

export default Register;
