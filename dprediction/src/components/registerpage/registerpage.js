import React ,{useState} from "react";
import "./registerpage.css"
import axios from "axios"
import {Navigate, useNavigate } from "react-router-dom";

const Registerpage = ()=>{

    const Navigate =useNavigate()


    const [ user, setUser] =useState({
        name:"",
        email:"",
        mobile:"",
        age:"",
        password:"",
        reEnterpassword:""
    })

    const handlechange = e => {
        const { name ,value}= e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () =>{
        const {name,email,mobile,age,password ,reEnterpassword}=user
        //authetication
        if(name && email && mobile && age && (password === reEnterpassword)){
            // alert("posted")
            console.log(user)
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
                Navigate("/login")
            })
            
        } else {

            alert(" Plz fill correct and all information")
        }
       
    }
    return(
        <div className="register">
             <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"/>
                <a className="navbar-brand" href="#">Welcome To Digital  Hospital</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
             <h1>Register here</h1>
             <input type="text" name="name" value={user.name} placeholder=" Your name" onChange={handlechange} ></input>
            <input type="email" name="email" value={user.email} placeholder="Your email" onChange={handlechange} ></input>
            <input type="text" name="mobile" value={user.mobile} placeholder="Your Mobile No." onChange={handlechange} ></input>
            <input type="number" name="age" value={user.age} placeholder=" Your Age" onChange={handlechange}></input>
            <input type="password"  name="password" value={user.password} placeholder="Enter your password" onChange={handlechange}/>
            <input type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder="Re-Enter your password" onChange={handlechange}/>
            <div className="button" onClick={register}> Register</div>
            <div>or </div>
            <div className="button" onClick={()=> Navigate("/login")}> Login</div>
            </div>
        
    )
}

export default Registerpage;