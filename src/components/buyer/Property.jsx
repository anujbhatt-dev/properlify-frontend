import React, { useState } from 'react';
import Map from './Map';

import p1 from "../../assets/images/p1.jpg"
import p2 from "../../assets/images/p2.jpg"
import p3 from "../../assets/images/p3.jpg"
import p4 from "../../assets/images/p4.jpg"

function Property() {
  // Define state variable to hold property data
  const [property, setProperty] = useState({
    location: "Pune",
    propertyType: "Apartment",
    price: "50",
    propertyAge: "5 years",
    amenities: ["Swimming Pool", "Gym", "Parking"],
    logtitude:"",
    latitude:""
    // Add more properties as needed
  });

  return (
    <div className='property'>
        <img src={p1} alt="" />
        <div className="flex-wrapper">
            <div className='property-location'><span>Location </span>{property.location}</div>
            <div className='property-propertyType'><span>Type </span>{property.propertyType}</div>
        </div>
        <div className="flex-wrapper">
            <div className='property-price'><span>₹Price </span>{property.price} Lac</div>
            <div className='property-propertyAge'><span>Age </span>{property.propertyAge}</div>
        </div>
        <div className="flex-wrapper">
            <div className='property-price'><span>Amenities  </span>{property.amenities.map(i=>i+" | ")}</div>
        </div>
        <div className='map'>
            <Map />
        </div>
    </div>
  );
}

export default Property;
