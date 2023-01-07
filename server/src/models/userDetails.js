//importing mongooose
const mongoose=require('mongoose')
const usersSchema=new mongoose.Schema({
    fullName:{type:String, require:true},
    age:{type:Number, require:true},
    gender:{type:String, require:true},
    temporaryAddress:{ type:String,require:true},
    permanentAddress:{ type:String,require:true},
    phoneNumber:{type:Number, require:true},
    email:{type:String, require: true, unique:true},
    password:{type:String, require:true},
    bloodGroup:{type:String, require:true},
}, {collection:'users'})
module.exports = mongoose.model("userDetails", usersSchema);
