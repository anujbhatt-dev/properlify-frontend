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
