import React from 'react'
import { FaSearch } from "react-icons/fa";

function BuyerFilter(props) {
  return (
    <div className='filter'>
      <div className='search'>
          <input onChange={props.handleChange} name="location" className='search-input' type="text" placeholder='search location'/>
          <button onClick={props.searchSubmit}  className='search-btn' ><FaSearch/></button>
      </div>
      <hr className='hr-primary'/>
      <form action="" className='filter-form'>
          <div className="filter-form__item">
              <div>
                <label className='filter-form__label' htmlFor="price">Price Range:</label>
                <span>₹{props.data.price} Lac</span>
              </div>
              <input
                  className='priceInput'
                  type="range"
                  id="price"
                  name="price"
                  min="0"
                  max="100"
                  value={props.data.price}
                  onChange={props.handleChange}
              />
          </div>
          
          <div className="filter-form__item">
                    <label htmlFor="propertyType" className='filter-form__label'>Property Type:</label>
                    <select
                        id="propertyType"
                        name="propertyType"
                        value={props.data.propertyType}
                        onChange={props.handleChange}
                    >
                        <option value="">Select Property Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                    </select>
                </div>
                <div className="filter-form__item">
                    <label htmlFor="amenities" className='filter-form__label'>Amenities:</label>
                    <input
                        type="text"
                        id="amenities"
                        name="amenities"
                        value={props.data.amenities}
                        onChange={props.handleChange}
                        placeholder="Separate amenities with commas"
                        
                    />
                </div>
                <div className="filter-form__item">
                    <label className='filter-form__label' htmlFor="propertyAge">Property Age:</label>
                    <input
                        type="number"
                        id="propertyAge"
                        name="propertyAge"
                        value={props.data.propertyAge}
                        onChange={props.handleChange}
                        placeholder="Enter property age in years"
                        
                    />
                </div>
      </form>
    </div>
  )
}

export default BuyerFilter