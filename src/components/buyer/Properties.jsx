import React from 'react'
import p1 from "../../assets/images/p1.jpg"
import p2 from "../../assets/images/p2.jpg"
import p3 from "../../assets/images/p3.jpg"
import p4 from "../../assets/images/p4.jpg"
import { Link } from 'react-router-dom'

function Properties(props) {
  return (
    <div className='properties'>
          <div className='map'>
            
          </div>
          <div className='properties-count'>
             Total Properties: <span >{props.properties.length}</span>
          </div>
          {props.properties.length!=0?
          <div className='cards'>
            {props.properties.map((property,index)=>(
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

                    <button className='explore' >
                          Explore
                    </button>

                    
                </div>
            ))}
          </div>
          :<div className='empty'>
                No Propertires Uploaded yet
          </div>
          }
    </div>
  )
}

export default Properties