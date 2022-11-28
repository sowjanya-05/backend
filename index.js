const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")
const port=3500

app.use(bodyparser.urlencoded({
	extended:true
}))

app.use(bodyparser.json())

app.use(cors())

mongoose.connect("mongodb+srv://sowjanya:sowjanya@cluster0.ffgonyr.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("Connection established")
	})
	.catch((err)=>{
		console.log(err)
	})

app.get("/",(req,res)=>{
	res.send("dummy root route")
})

app.post("/register",(req,res)=>{
	//const {email.password}=req.body;
	const email="sowji@gmail.com",passcode="080803"
	const newFrontendUser= new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})

app.listen(port,()=>console.log("server is running on port 3500"))