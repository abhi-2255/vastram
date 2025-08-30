const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    mobile: {type:String, required:true, unique:true},
    email: {type:String, required:true}, unique:true,
    password: {type:String, required:true},
    confirmPassword: {type:String, required:true},
},{timestamps:true})

export default mongoose.model("User", userSchema)