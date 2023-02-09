import React from 'react'
import { PhoneOutlined } from '@ant-design/icons';
import { Button } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import './card.css'


const Card = ({details}) => {
  return (
    <>
     <div className='container'>
      <div className='recieverId'><span>ID:{details.recieverId}</span></div>
      <div className='details'> 
      <img src='' alt='image'/>
      <span><PhoneOutlined/> {details.phoneNumber}</span>
      <p>{details.detailsNote}</p>
      <span><BloodtypeIcon/>{details.bloodGroup}</span>
      <span> Reciever Name: {details.fullName}</span>
      </div>
      <div className='buttons'>
        <Button>Accept</Button>
        <Button>Reject</Button>
      </div>

      
    </div>
    </>
  )
}

export default Card