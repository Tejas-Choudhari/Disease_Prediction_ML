import React, { useState } from "react";
import "./loginpage.css"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Loginpage = ({ setLoginUser }) => {

    const Navigate = useNavigate()

    const [user, setUser] = useState({

        email: "",
        password: "",

    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                Navigate("/")
            })
    }

    return (
            <div className="d-flex justify-content-center align-items-center" style={{height:"600px",overflow:"hidden"}}>

                <div className="login">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" />
                    <a className="navbar-brand" href="#">Welcome To Digital  Hospital</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {console.log(user)}
                    <h1>Login</h1>
                    <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handlechange} />
                    <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handlechange} />
                    <div className="button" onClick={login}> Login</div>
                    <div>or </div>
                    <div className="button" onClick={() => Navigate("/register")}> Register</div>
                </div>
            </div>

    )
}

export default Loginpage;