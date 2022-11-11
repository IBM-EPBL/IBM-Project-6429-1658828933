import React from "react";
import loginImg from '../src/image/login.jpg'
import { auth, fbProvider, googleProvider } from "./firebase";

const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    const googleLogin = async ()=> {
        try {
            await auth.signInWithPopup(googleProvider);
            setEmail(await auth.currentUser);
        } catch (error) {
            console.log(error);
        }
    };

    const facebookLogin = async ()=> {
        try {
            await auth.signInWithPopup(fbProvider);
            setEmail(await auth.currentUser);
        } catch (error) {
            console.log(error);
        }
    };
    
    console.log(email);

    return (
        <section className="login">
            <div className="loginContainer">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                    <label>Email</label>
                    <input
                        type="text"
                        autoFocus
                        required
                        value={email}
                        placeholder = "Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        placeholder = "Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                </div>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button className="button1" onClick={handleSignup}>Sign up</button>
                        <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    ):(
                        <>
                        <button className="button1" onClick={handleLogin}>Log in</button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    )}
                </div>
                <div className="centerline"></div>
                <div className="buttonContainer" onClick={googleLogin}>
                    
                    <button className="loginbtn">
                        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" 
                        alt=""/>
                        Google Login
                    </button>
                </div>
                <div className="buttonContainer" onClick={facebookLogin}>
                    <button className="loginbtn">
                        <img className="icon" src="https://toppng.com/uploads/preview/facebook-logo-png-transparent-facebook-f-logo-sv-11563088711q5rgq6hd0v.png" alt=""/>
                        Facebook Login
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Login;