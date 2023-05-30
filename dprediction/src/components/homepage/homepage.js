import React from "react";
import "./homepage.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from 'react-router-dom';


const Homepage = ({setLoginUser})=>{
    return(
        <div className="homepage">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">Welcome , Digital Hospital</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" >Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/diabetics">Dibetices Prediction</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/heart">Heart Disease Prediction</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/help">Help</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=> setLoginUser({})}>LogOut</a>
                        </li>
                    </ul>
                </div>
            </nav>
                     
                         <div className="circle"> “Time and health are two precious assetsthat we don’t            recognize and appreciate until they have been depleted.” -  Denis Waitley
                        </div> 

                    



        </div>
    )
}


export default Homepage;
