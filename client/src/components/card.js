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
            <img src="../../public/uploads/logo.png" alt="react logo" style={{ width: '400px', }}/>
          {/* <img
            src="../../public/uploads/logo.png"
            alt="Girl in a jacket"
            style={{ maxHeight: "50px", maxWidth: "50px" }}
          /> */}
          <span style={{display:'flex'}}>
            <PhoneIcon style={{color: "#5e0431"}}/> {details.phoneNumber}
          </span>
          <p>{details.detailsNote}</p>
          <span style={{ display: "flex" }}>
            <BloodtypeIcon style={{ color: "#5e0431" }} />
            {details.bloodGroup}
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
