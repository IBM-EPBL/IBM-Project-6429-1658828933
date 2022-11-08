import React from "react";
import loginImg from '../src/image/login.jpg'

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

    return (
        <section className="login">
            <div className="loginContainer">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                    <label>Username</label>
                    <input
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                </div>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>

        </section>
    );
};

export default Login;