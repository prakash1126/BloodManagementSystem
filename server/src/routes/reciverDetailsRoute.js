//importing express
const express = require("express");
//importing models
const RecieverDetails = require("../models/recieverDetails");
//importing Rotuer
const router = express.Router();
//creating post method for reciever
const multer=require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
 const upload = multer({ storage: storage })

router.post("/reciever", upload.single('image'), async(req,res) => {
  // console.log(req)
 const recieverDetails=new RecieverDetails(
  {
    fullName:req.body.fullName,
    bloodGroup:req.body.bloodGroup,
    detailsNote:req.body.detailsNote,
    phoneNumber:req.body.phoneNumber,
    requisitionForm:req.body.requisitionForm,
    recieverId:req.body.recieverId
  }
 )
 const data= await recieverDetails.save()
  try {
    if (data) {
      res.json({
        msg: "your details is posted",
      });
    } else {
      res.status(500).json({
        error: "something went wrong",
      });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;


router.get("/reciever", async (req, res) => {
try {
    const data = await RecieverDetails.find()
    if(data){
        res.status(200).json({
            validDetails: data
        })
    }else{
        res.status(500).json({
            msg: "something went wrong"
        })
    }
} catch (err) {
    console.log(err);
}
});