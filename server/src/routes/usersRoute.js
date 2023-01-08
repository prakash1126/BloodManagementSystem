//importing express
const express=require('express');
//importing models
const userDetails=require('../models/userDetails')
//importing bcrypt
const bcrypt = require("bcrypt");
//importing router
const router=express.Router();
//creating post method register
router.post('/register', async(req,res)=>{
    console.log(req.body.password)
    
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
            res.status(200).json({ msg: "user is created successfully" });
        }
        else{
            res.status(500).json({ error: "something went worng" });
        }
    }
    else{
        res.status(409).json({ error: "user already exists" });
    }
    }
    catch(err){
        console.log(err)
    }
})
router.post("/login", async (req, res) => {
    const user = await userDetails.findOne({email: req.body.email}).lean()
    if(user){
      try{
      const {email,password} = user;
      const isMatched= bcrypt.compareSync(req.body.password, password)
      if(email && isMatched){
        res.status(200).json({
          msg:"logged in successfully",
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


