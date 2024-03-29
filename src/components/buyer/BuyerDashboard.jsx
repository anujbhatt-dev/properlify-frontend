import React, { useEffect, useState } from 'react';
import Properties from './Properties';
import BuyerFilter from './BuyerFilter';
import axios from 'axios';
import Map from './Map';
import Notification from './Notification';

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

  const searchSubmit = (e) => {
    e.preventDefault();
    console.log(data.location);
    if(data.location===''){
      axios.get('/property/allProperty').then(res=>{
        setProperties(res.data);
      })
    }
    let filterProperty = properties
    filterProperty = filterProperty.filter(i=> i.location===data.location)
    console.log(filterProperty);
    setProperties([...filterProperty])
    
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
          <Map properties={properties}/>
        </div>
        <div className='buyerDashboard-properties'>
          {/* <Map /> */}
          <Properties properties={properties} />
        </div>
      </div>
        <Notification/>
    </div>
  );
}

export default BuyerDashboard;
