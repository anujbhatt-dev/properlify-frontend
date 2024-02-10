import React, { useState } from 'react';
import building from "../assets/images/building.png";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

function Login(props) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // You can perform form submission logic here, like API calls or validation
        try{
            const res = await axios.post('/user/login', formData);
            console.log('Login successfully');
            props.getAuthenticated(res.data)
            if(res.data.accountType==="Buyer") return navigate("/buyerDashboard")
            if(res.data.accountType==="Seller") return navigate("/sellerDashboard")
            // console.log(response1);
        }
        catch(err){
            console.log(err);
        }
    };

    return (
        <div className='login'>
            <motion.div className="login-content"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 130, delay: 0.04 }}>
                <div className="login-content__head">
                    <h1 className="">Login</h1>
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
                            <Link className='link' to="/register"> Signup</Link>
                        </p>
                        <button
                        // whileHover={{ y: -5 }}
                        type="submit" className="button">Login</button>
                    </div>
                </form>
            </motion.div>
            <div className="login-img">
                <img className="o1" src={building} alt="Building" />
                <img className="o2" src={building} alt="Building" />
                <img className="o3" src={building} alt="Building" />
            </div>
        </div>
    );
}

export default Login;


