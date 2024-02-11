import React, { useEffect, useState } from 'react';
import axios from 'axios';

import p1 from "../../assets/images/p1.jpg"
import p2 from "../../assets/images/p2.jpg"
import p3 from "../../assets/images/p3.jpg"
import p4 from "../../assets/images/p4.jpg"

function SellerDashboard(props) {
    const [ list, setList ] = useState([]);
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

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., send data to backend or perform validation
        try {
            const response = await axios.post('http://localhost:5000/property/listProperty', formData);
            console.log(formData);
            setList((pState)=>{
                return [...pState,formData]
            })
            
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        const fetchProperties = async () => {
            console.log("here"+JSON.stringify(props.user));
            try {
              const response = await axios.get(`/property/myProperty/${props.user._id}`); // Adjust the endpoint according to your backend API
              console.log(response);
              setList(response.data);
            } catch (error) {
              console.error('Error fetching property data:', error);
            }
          };
      
          fetchProperties();
        }, [])


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
                    <div className='cards'>
                {list.map((property,index)=>(
                <div key ={index} className='card'>
                    <img src={index%4+1==1?p1:index%4+1==2?p2:index%4+1==3?p3:index%4+1==4?p4:null} alt="" />
                    <div className="flex-wrapper">
                      <div className='card-location'><span>Location </span>{property.location}</div>|
                      <div className='card-propertyType'><span>Type </span>{property.propertyType}</div>
                    </div>
                    <div className="flex-wrapper">
                      <div className='card-price'><span>₹Price </span>{property.price} Lac</div>|
                      <div className='card-propertyAge'><span>Age </span>{property.propertyAge}</div>
                    </div>
                    
                </div>
            ))}
          </div>
                </div>
            </div>
        </div>
    );
}

export default SellerDashboard;
