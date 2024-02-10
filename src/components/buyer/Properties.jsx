import React, { useState, useEffect } from 'react';
import axios from 'axios';
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";
import { Link, useNavigate } from 'react-router-dom';

function Properties(props) {
  const navigate = useNavigate();
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      try {
        const response = await axios.get('/property/filter', {
          params: props.filterCriteria
        });
        setFilteredProperties(response.data);
      } catch (error) {
        console.error('Error fetching filtered properties:', error);
      }
    };

    fetchFilteredProperties();
  }, [props.filterCriteria]);

  const exploreHandler = (e) => {
    navigate('/property');
  };

  return (
    <div className='properties'>
      <div className='map'></div>
      <div className='properties-count'>
        Total Properties: <span>{filteredProperties.length}</span>
      </div>
      {filteredProperties.length !== 0 ? (
        <div className='cards'>
          {filteredProperties.map((property, index) => (
            <div key={index} className='card'>
              <img src={index % 4 + 1 === 1 ? p1 : index % 4 + 1 === 2 ? p2 : index % 4 + 1 === 3 ? p3 : index % 4 + 1 === 4 ? p4 : null} alt="" />
              <div className="flex-wrapper">
                <div className='card-location'><span>Location </span>{property.location}</div>|
                <div className='card-propertyType'><span>Type </span>{property.propertyType}</div>
              </div>
              <div className="flex-wrapper">
                <div className='card-price'><span>₹Price </span>{property.price} Lac</div>|
                <div className='card-propertyAge'><span>Age </span>{property.propertyAge}</div>
              </div>
              <button className='explore' type='button' onClick={exploreHandler}>
                Explore
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className='empty'>
          No Properties Uploaded yet
        </div>
      )}
    </div>
  );
}

export default Properties;
