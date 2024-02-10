import React, { useState } from 'react';

function SellerDashboard() {
    const [formData, setFormData] = useState({
        location: '',
        price: '',
        propertyType: '',
        amenities: [],
        propertyAge: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., send data to backend or perform validation
        console.log(formData);
    };

    return (
        <div className='sellerDashboard'>
            <div className="login-content__head">
                <center><h1 className="">Add Property</h1></center>
            </div>
            <form className='sellerDashboard-form' onSubmit={handleSubmit}>
                <label>
                    Location:
                </label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
                <label>
                    Price (in INR):
                </label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
                <label>
                    Property Type:
                </label>
                <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                >
                    <option value="">Select Property Type</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="1RK">1RK</option>
                    <option value="Commercial Space">Commercial Space</option>
                </select>
                <label>
                    Amenities (comma-separated):
                </label>
                <input
                    type="text"
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                />
                <label>
                    Property Age:
                </label>
                <input
                    type="text"
                    name="propertyAge"
                    value={formData.propertyAge}
                    onChange={handleChange}
                />
                <button className='button' type="submit">Submit</button>
            </form>

            <div className='Added properties'>
                <div className="login-content__head">
                    <center><h1 className="">Added Property</h1></center>
                </div>
            </div>
        </div>
    );
}

export default SellerDashboard;
