const moongoose=require("mongoose")

const newUserSchema={
	username:String,
	password:String
}
const Register=moongoose.model("students",newUserSchema)

module.exports=Register