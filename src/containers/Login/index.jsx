import React from "react";
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <h1 className="title">Create a new Password</h1>
                <p className="subtitle">A new password for your account</p>
                <form action="/" className="form">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" name="password" placeholder="********"
                           className="input input-password"/>

                    <label htmlFor="new-password" className="label">New Password</label>
                    <input type="password" id="new-password" name="new-password" placeholder="********"
                           className="input input-password"/>
                    <input type="submit" value="Confirm" className="primary-button login-button"/>
                </form>
            </div>
        </div>
    );
}
export default Login;