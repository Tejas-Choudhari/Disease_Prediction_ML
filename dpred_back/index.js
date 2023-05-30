import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app =express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1/myLoginRegisterDB" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("DB Connect ")

})
//schema to store body of the data
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile:Number,
    age:Number,
    password: String
})

//model 
const User = new mongoose.model("User",userSchema)

//login
app.post("/login", (req , res)=>{
   
    const{email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Login Succesfull",user:user})
                // console.log(" Login Succesfull")
            } else{
                res.send({message:" Incorrect Password"})
                // console.log(" Incorrect Password")
            }
        }else{
            res.send({message:"User not registered"})
            // console.log(" User not registered")
        }
    })
})




//register


app.post("/register", (req , res)=>{
    
    
    const{name, email,mobile, age,password}=req.body
    console.log(req.body)
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:" User already registered plz Login now"})
            // console.log(" User already registered")

        }else{
        
            User.create({ name: name, email: email, mobile:mobile,age:age,password: password })
     .then((result) => {
      res.send(result);
      alert(res.send.message("registered succesfull now login "))
    })
      .catch((err) => console.log(err));
            
        }
    })  
   
})


app.listen(9002, ()=>{
    // res.send("My API")
    console.log(" BE started at the point 9002")
})