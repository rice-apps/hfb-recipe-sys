import React, { useState } from "react";
import Component from "react";

import Popup from "reactjs-popup";
import LogIn from "./LogIn";
import '../../style/Login.css';
import { Registration } from "./LogIn";

const Messagebutton = (props: {trigger: boolean}) => {

    const [open, setOpen] = useState(true)


    const clickClose = () => {
        setOpen(false)
    }
    return (
        props.trigger ?

        (open ? <div className = "signup-box1">
            <div className = "popup-inner1">
                <p>Login Successful!</p>
                <button className = "close1" onClick = {clickClose}> <img src = "close.png" className = "closelogomessage"/></button>
            </div>
        </div> : <></>)

        :

        (open ? <div className = "signup-box1">
            <div className = "popup-inner1">
                <p>Login UnSuccessful. Try Again.</p>
                <button className = "close1" onClick={clickClose}> <img src = "close.png" className = "closelogomessage"/></button>
            </div>
        </div> : <></>)

    )
}

const RegistrationMessage = (props: {trigger: boolean}) => {

    const [open, setOpen] = useState(true)


    const clickClose = () => {
        setOpen(false)
    }
    return (
        props.trigger ?

        (open ? <div className = "signup-box1">
            <div className = "popup-inner1">
                <p>Registration Successful!</p>
                <button className = "close1" onClick = {clickClose}> <img src = "close.png" className = "closelogomessage"/></button>
            </div>
        </div> : <></>)

        :

        (open ? <div className = "signup-box1">
            <div className = "popup-inner1">
                <p>Registration Unsuccessful!</p>
                <button className = "close1" onClick={clickClose}> <img src = "close.png" className = "closelogomessage"/></button>
            </div>
        </div> : <></>)

    )
}



export function SignInUp(props :{Toggle: Function}) {
    const [visible, setVisible] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [logstatus, setlogStatus] = useState(false)
    const [reguser, Setreguser] = useState('')
    const [regemail, Setregemail] = useState('')
    const [regpassword, Setregpassword] = useState('')

    

    const closebutton = () => {
        setVisible(false);
        
    }

    
        return (
        visible ? 
            <div className="signup-box">
                <div className = "popup-inner">
                    <div className = "signin-form">
                            <div className = "text-element">
                                <h1>Login</h1>
                            </div>
                            <div className = "input-form">
                                <form>
                                    <label className="email_">Email / Username</label><br/>
                                    <input type = "text" placeholder = "Email/Username" name = "email" className="email-box" required onChange={(e) =>setEmail(e.target.value)}/><br/>
                                    <label className="pword">Password</label><br/>
                                    <input type="password" placeholder="password" name="password" className = "password-box" required onChange={(e) =>setPassword(e.target.value)}/><br/>            
                                </form>
                                
                                <Popup className = "popup" trigger = {<button className="Login" onClick = {() => props.Toggle(LogIn(email,password))} > Login </button>} > <Messagebutton trigger = {LogIn(email, password)} /> </Popup>
                                

                            </div>    
                        
                    </div>




                    <div className = "signin-form">
                        <div className = "text-element">
                            <h1>Create Account</h1>
                        </div>
                        <div className = "input-form">
                            <form>
                                <label className="email_">Email</label><br/>
                                <input type = "text" placeholder = "Email" name = "email" className="email-box" required onChange={(e) =>Setregemail(e.target.value)}/><br/>
                                <label className="Username">Username</label><br/>
                                <input type = "text" placeholder = "Username" name = "username" className="email-box" required onChange={(e) =>Setreguser(e.target.value)}/><br/>
                                <label className="pword">Password</label><br/>
                                <input type="password" placeholder="password" name="password" className = "password-box" required onChange={(e) =>Setregpassword(e.target.value)}/><br/>            
                            </form>
                        
                            <Popup className = "popup" trigger = {<button className="Login"  > Sign Up </button>} > <RegistrationMessage trigger = {Registration(regemail, regpassword)} /> </Popup>

                        </div>    

                    </div>
                    <button className = "close" onClick={closebutton}><img src = "close.png" className = "closelogo"/></button>
                </div>
            </div>

            : null

            
        
            
        )
}

export default SignInUp
