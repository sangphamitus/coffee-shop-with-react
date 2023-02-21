import React from "react";
import './Login.css'
import image from '../../Image/LoginBG.jpeg' 
export default function Login()
{
    return (
        <div className="login-viewpoint">
            <div className="overlay d-flex justify-content-center">
                <div className=" sub-viewpoint">
                    
                        <div  className="d-flex w-100 p-5 h-100 justify-content-center">
                                <form className="card  mb-auto mt-auto p-4">
                                    <label>Email </label>
                                    <input placeholder="Username or Email"></input>
                                    <label>Password </label>
                                    <input placeholder="Password" type="password"></input>
                                    <button className="mt-3">Login</button>
                                </form>
                            </div>
                   
                </div>  
                
            </div>
            
        </div>
    )
}