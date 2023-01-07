//importing express
const express=require('express');
//importing models
const userDetails=require('../models/userDetails')
//importing bcrypt
const bcrypt=require('bcrypt')
//importing router
const router=express.Router();

router.post('/register', async(req,res)=>{
    try{
    //finding existing user or not in database
    const user= await userDetails.findOne({email:req.body.email})
    //hashing password 
    const hashPassword=bcrypt.hashSync(req.body.password,10)//**10 is saltsync*/
    if(!user){
        req.body.password=hashPassword;
        //creating new user
        const userCreate=userDetails.create(req.body)
        if(userCreate){
            res.json({ msg: "user is created successfully" });
        }
        else{
            res.json({ error: "something went worng" });
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
module.exports=router;