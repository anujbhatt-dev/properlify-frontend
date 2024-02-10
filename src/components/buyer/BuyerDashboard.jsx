import React, { useEffect, useState } from 'react';
import Properties from './Properties';
import BuyerFilter from './BuyerFilter';
import axios from 'axios';
import Map from './Map';

function BuyerDashboard() {
  const [data, setData] = useState({
    location: "",
    price: 0,
    propertyType: "",
    amenities: [],
    propertyAge: ""
  });

  const [properties, setProperties] = useState([
    // {
    //   location: "Pune",
    //   longitude: "18.5204",
    //   latitude: "73.8567",
    //   price: "5000000",
    //   propertyType: "Apartment",
    //   amenities: ["Swimming Pool", "Gym", "Parking"],
    //   propertyAge: "5 years",
    // },
    // {
    //   location: "Mumbai",
    //   longitude: "19.0760",
    //   latitude: "72.8777",
    //   price: "8000000",
    //   propertyType: "Villa",
    //   amenities: ["Garden", "Security", "Garage"],
    //   propertyAge: "10 years",
    // },
    // {
    //   location: "Bangalore",
    //   longitude: "12.9716",
    //   latitude: "77.5946",
    //   price: "6000000",
    //   propertyType: "House",
    //   amenities: ["Terrace", "Parking"],
    //   propertyAge: "2 years",
    // },
    // {
    //   location: "Delhi",
    //   longitude: "28.7041",
    //   latitude: "77.1025",
    //   price: "7000000",
    //   propertyType: "Apartment",
    //   amenities: ["Gym", "Parking"],
    //   propertyAge: "3 years",
    // },
    // {
    //   location: "Hyderabad",
    //   longitude: "17.3850",
    //   latitude: "78.4867",
    //   price: "5500000",
    //   propertyType: "House",
    //   amenities: ["Garden", "Parking"],
    //   propertyAge: "4 years",
    // },
    // {
    //   location: "Chennai",
    //   longitude: "13.0827",
    //   latitude: "80.2707",
    //   price: "7500000",
    //   propertyType: "Apartment",
    //   amenities: ["Swimming Pool", "Gym", "Parking"],
    //   propertyAge: "6 years",
    // },
    // {
    //   location: "Kolkata",
    //   longitude: "22.5726",
    //   latitude: "88.3639",
    //   price: "6500000",
    //   propertyType: "Villa",
    //   amenities: ["Garden", "Parking"],
    //   propertyAge: "7 years",
    // },
    // {
    //   location: "Ahmedabad",
    //   longitude: "23.0225",
    //   latitude: "72.5714",
    //   price: "6800000",
    //   propertyType: "House",
    //   amenities: ["Terrace", "Parking"],
    //   propertyAge: "1 year",
    // },
    // {
    //   location: "Jaipur",
    //   longitude: "26.9124",
    //   latitude: "75.7873",
    //   price: "7200000",
    //   propertyType: "Apartment",
    //   amenities: ["Gym", "Parking"],
    //   propertyAge: "8 years",
    // },
    // {
    //   location: "Lucknow",
    //   longitude: "26.8467",
    //   latitude: "80.9462",
    //   price: "5900000",
    //   propertyType: "House",
    //   amenities: ["Garden", "Parking"],
    //   propertyAge: "5 years",
    // },
    // Add more properties as needed
  ]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform filtering logic here, like API calls or setting state for filtered data
    console.log(data);
  };

  const searchSubmit = () => {
    e.preventDefault();
  }

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/property/allProperty'); // Adjust the endpoint according to your backend API
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };

    fetchProperties();
  }, [])

  return (
    <div className='buyerDashboard'>
      <div className='buyerDashboard-filter'>
        <BuyerFilter
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchSubmit={searchSubmit}
        />
      </div>
      <div className='container'>
        <div className="map">
          <Map />
        </div>
        <div className='buyerDashboard-properties'>
          {/* <Map /> */}
          <Properties properties={properties} />
        </div>
      </div>

    </div>
  );
}

export default BuyerDashboard;
