
import SignInUp from './SignInUp';

import '../../style/Login.css';
import { useState } from 'react';
import Popup from 'reactjs-popup';





export default function LogInPage(props: {togglelogin: Function}) {
    return(
    <Popup className = "popup" trigger={<button className = "Userbutton"><img className = "User" src = "User.png" ></img> jhp9@rice.edu</button>} position= "right center">
            <SignInUp Toggle = {props.togglelogin}/>
    </Popup>
    )
}