import React from "react";
import AppBar from "@mui/material/AppBar";
import logo from "../assests/images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { Toolbar, Grid, Tabs, Tab, Button, Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutDetails } from "../redux/action/userAction";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const triggerLogout = () => {
    dispatch(logoutDetails());
    navigate("/");
  };
  const donorPage = () => {
    navigate("/donor");
  };
  const recieverPage = () => {
    navigate("/reciever");
  };
  const { email, fullName } = useSelector((state) => state.users);
  const navItems = ["Home", "About Us", "Contacts", "FAQS"];
  return (
    <AppBar
      position="static"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,1,18,1) 0%, rgba(186,34,101,0.9724264705882353) 100%, rgba(64,4,4,0.700717787114846) 100%)",
      }}
    >
      <Toolbar>
        <Grid
          container
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Grid xs={3}>
            <Link>
              <img
                style={{ width: "100px", height: "80px" }}
                src={logo}
                alt="logo"
              />
            </Link>
          </Grid>
          <Grid xs={4}>
            <Tabs>
              {navItems.map((item) => {
                return <Tab style={{ color: "white" }} label={item} />;
              })}
            </Tabs>
          </Grid>
          {email ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AccountCircleIcon
                  style={{ fontSize: 45, marginLeft: "30px" }}
                />
                <span style={{ fontSize: "14px", marginLeft: "30px" }}>
                  {fullName}
                </span>

                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(2,1,18,1) 0%, rgba(186,34,101,0.9724264705882353) 100%, rgba(64,4,4,0.700717787114846) 100%)",
                  }}
                  disabled={bool2}
                  onClick={() => {
                    donorPage();
                    setBool1(true);
                  }}
                >
                  Donor
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(2,1,18,1) 0%, rgba(186,34,101,0.9724264705882353) 100%, rgba(64,4,4,0.700717787114846) 100%)",
                    marginLeft: "10px",
                  }}
                  disabled={bool1}
                  onClick={() => {
                    recieverPage();
                    setBool2(true);
                  }}
                >
                  Reciever
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(2,1,18,1) 0%, rgba(186,34,101,0.9724264705882353) 100%, rgba(64,4,4,0.700717787114846) 100%)",
                  }}
                  onClick={() => triggerLogout()}
                >
                  Logout
                </Button>
              </Box>
            </>
          ) : (
            <h1>something went wrong</h1>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
