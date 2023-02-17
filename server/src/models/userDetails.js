//importing mongooose
const mongoose=require('mongoose')
const usersSchema=new mongoose.Schema({
    fullName:{type:String, required:true},
    age:{type:Number, required:true},
    gender:{type:String, required:true},
    date:{type: Date, default: Date.now},
    country:{type:String, required:true},
    city:{type:String, required:true},
    temporaryAddress:{ type:String,required:true},
    permanentAddress:{ type:String,required:true},
    phoneNumber:{type:Number, required:true},
    email:{type:String, required: true, unique:true},
    password:{type:String, required:true},
    bloodGroup:{type:String, required:true},
}, {collection:'users'})
module.exports = mongoose.model("userDetails", usersSchema);
