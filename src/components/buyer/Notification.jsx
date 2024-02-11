import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { IoIosNotifications } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const socket = io('http://localhost:5000/'); // Replace with your backend server URL

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const [show,setShow]= useState(false)
    const showHandler =  ()=>{
        setShow(!show)
    }
    useEffect(() => {
        // Listen for 'newPropertyAdded' event
        socket.on('newPropertyAdded', (newProperty) => {
            // Update notifications state with the new property
            setNotifications([...notifications, newProperty]);
            setShow(true)
        });
        // Clean up on unmount
        return () => {
            socket.disconnect();
        };
    }, [notifications]); // Dependency array ensures effect is only run on mount and when 'notifications' state changes

    return (
        [<div onClick={showHandler} className='notification'>
            <h2 className='notification-bell'><IoIosNotifications/></h2>    
        </div>,!show?
        <div className='notification-box'>
        {
        notifications.map((property, index) => (
            <div className='' key={index}>
                {/* Display property details */}
                new property added at {property.location}
            </div>
        ))
        }
            <div className='notification-item' >
                {/* Display property details */}
                <i onClick={showHandler}><IoClose /></i>
                
                new property added at pune
            </div>
            <div className='notification-item' >
                {/* Display property details */}
                <i onClick={showHandler}><IoClose /></i>
                
                new property added at pune
            </div>
        </div>:null
        ]
    );
};

export default Notification;