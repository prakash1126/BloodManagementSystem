import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import { Button, TextField } from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import "./card.css";

const Card = ({ details }) => {
  console.log(details);

  return (
    <>
      <div className="container">
        <div className="recieverId">
          <span
            style={{
              marginLeft: "10px",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            ID:{details.recieverId}
          </span>
        </div>
        <div className="details">
            <img src={require(`../uploads/${details.requisitionForm}`)} alt="react logo" style={{ maxwidth: '5rem', maxHeight:'5rem'}}/>
          <span style={{display:'flex'}}>
            <PhoneIcon style={{color: "#5e0431"}}/> {details.phoneNumber}
          </span>
          <p style={{width:'30rem', wordWrap:"break-word", textAlign:'justify'}}>{details.detailsNote}</p>
          <span style={{ display: "flex"}}>
            <BloodtypeIcon style={{ color: "#5e0431" }} />
            <span> {details.bloodGroup}</span>
          </span>
          <span> Reciever Name: {details.fullName}</span>
        </div>
        <div className="buttons">
          <Button>Accept</Button>
          <Button>Reject</Button>
        </div>
      </div>
    </>
  );
};
export default Card;
