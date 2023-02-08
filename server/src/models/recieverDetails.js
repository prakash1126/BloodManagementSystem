//importing mongoose
const mongoose = require('mongoose')
const usersSchema=new mongoose.Schema({
    fullName:{type:String, require:true},
    phoneNumber:{type:String, require:true},
    requisitionForm:{type:String, require: true},
    bloodGroup:{type:String, require:true},
    detailsNote:{type:String, require:true}
}, {collection:'reciever'})
module.exports = mongoose.model("recieverDetails", usersSchema);