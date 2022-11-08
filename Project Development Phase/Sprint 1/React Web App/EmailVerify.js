import React from "react";
import './App.css';


const EmailVerify = ({handleLogout}) => {
    return (
        <div className="popup-box">
        <div className="box">
            Election is being generated, please wait.
            <button onClick={handleLogout}>Back to Login</button>
        </div>
        </div>
    );
};
export default EmailVerify;

