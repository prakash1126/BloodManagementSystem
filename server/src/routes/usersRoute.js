//importing express
const express=require('express');
//importing models
const userDetails=require('../models/userDetails')
//importing bcrypt
const bcrypt = require("bcrypt");
//importing router
const router=express.Router();
//creating post method register
var jwt = require('jsonwebtoken');
router.post('/register', async(req,res)=>{
    try{
    //finding existing user or not in database
    const user= await userDetails.findOne({email:req.body.email})

    if(!user){
          //hashing password 
            const hash =bcrypt.hashSync(req.body.password, 10);
            req.body.password=hash;
        //creating new user
        const userCreate=userDetails.create(req.body)
        if(userCreate){
          //giving response if user is created
            res.status(200).json({ msg: "user is created successfully" });
        }
        else{
          //givind response if internal server error
            res.status(500).json({ error: "something went worng" });
        }
    }
    else{
        //giving response if user is exist
        res.status(409).json({ error: "user already exists" });
    }
    }
    catch(err){
        console.log(err)
    }
})
router.post("/login", async (req, res) => {
    const user = await userDetails.findOne({email: req.body.email}).lean()
    if(user) {
      const {password,email}=user
      try{
      const isMatched= bcrypt.compareSync(req.body.password, password)
      const token =jwt.sign({email: req.body.email}, process.env.SECRET_TOKEN_KEY);
     user.token = token
    //  user.loggedinAs=req.body.loggedinAs
      if(email && isMatched){
        const {password, ...updatedUserDetails}=user
        res.status(200).json({
          msg:"logged in successfully",
          userDetails:updatedUserDetails,
        })
      }
      else{
        res.status(401).json({
          error:"unauthorized user"
        })
      }
      }
      catch(err){
        console.log(err)
      }
      }
      else{
        res.json({
          msg:"user doesn't exist"
        })
      }
  });  
module.exports=router;


