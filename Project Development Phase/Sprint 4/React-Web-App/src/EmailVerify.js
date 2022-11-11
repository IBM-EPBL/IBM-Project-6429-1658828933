import React from "react";
import './App.css';


const EmailVerify = ({handleLogout}) => {
    return (
        <div className="background">
            <h2>Please verify your Email.</h2>
            <button className="button2" onClick={handleLogout}>Back to Login</button>
        </div>
    );
};
export default EmailVerify;

