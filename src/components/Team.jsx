import React from 'react';
import samarth from "../assets/images/samarth.jpg"
import sanil from "../assets/images/sanil.jpg"
import sajal from "../assets/images/sajal.jpg"
import anuj from "../assets/images/anuj.jpg"

function Team() {
  return (<>
    <div className='problem'>
    <h1>Pictures taken during hackathon </h1>
    </div>
    <div className='team'>
      <div className='team-member'>
        <img src={anuj} alt='Team Member 1' />
        <div className='team-member-name'>Anuj  Bhatt</div>
      </div>
      <div className='team-member'>
        <img src={sanil} alt='Team Member 2' />
        <div className='team-member-name'>Sanil Jain</div>
      </div>
      <div className='team-member'>
        <img src={samarth} alt='Team Member 3' />
        <div className='team-member-name'>Samarth Gupta</div>
      </div>
      <div className='team-member'>
        <img src={sajal} alt='Team Member 4' />
        <div className='team-member-name'>Sajal Rastogi</div>
      </div>
    </div></>
  );
}

export default Team;
