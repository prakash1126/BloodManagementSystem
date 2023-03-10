import React, { useState, useEffect } from "react";
import Card from "../components/card";
import axios from "axios";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
const Donor = () => {
  const [recieverDetails, setRecieverDetails] = useState([]);
  const fetchDetails = async () => {
    const response = await axios.get("http://localhost:5000/reciever");
    const data = response.data.validDetails;
    setRecieverDetails(data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <div>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search......."
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      {recieverDetails.map((item, id) => {
        return (
          <>
            <Card details={item} />
          </>
        );
      })}
    </>
  );
};

export default Donor;
