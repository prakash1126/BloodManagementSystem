import React from "react";
import AppBar from "@mui/material/AppBar";
import logo from '../assests/images/logo.png'

import { Toolbar,Grid,Tabs,Tab,Button,Box, MenuList, MenuItem, Select } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  const navItems=["Home", "About Us", "Contacts", "FAQS"]
  return (
    <AppBar position='static' style={{background:'linear-gradient(90deg, rgba(2,1,18,1) 0%, rgba(186,34,101,0.9724264705882353) 100%, rgba(64,4,4,0.700717787114846) 100%)'}}>
      <Toolbar >
        <Grid container style={{display:'flex', alignItems:'center',justifyItems:'center'}}>
          <Grid xs={3}>
            <Link><img  style={{ width:'100px', height:'80px'}}src={logo} alt='logo'/></Link>
          </Grid>
          <Grid xs={5}>
            <Tabs >
            {navItems.map((item)=>{
              return <Tab style={{color:'white'}} label={item}/>
            })}
            </Tabs>
          </Grid>
          <Box>
            <Button variant='primary'>Login</Button>
            <Button variant='primary'>Register</Button>
            <Button variant='primary'>Logout</Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
