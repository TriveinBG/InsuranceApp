import React from 'react';
// import LoginForm from './subcomponents/LoginForm';
import { Link } from 'react-router-dom';

function Login() {

    const bottomText = {
        fontSize: "0.7em",
        fontFamily: "sans-serif",
        color: "white",
        textDecoration: "underline",
    }

    const button = {
        width: "100%",
        height: "20%",
        backgroundColor: "brown",
        fontWeight: "bold",
        color: "white",
        border: "none",
        margin: "5% 0 2%"
    }

        return(
            <div className="mainPage">
            <form className='loginForm'>
                <h1>LOGIN</h1>
                <input placeholder="Username" ></input>
                <input type="password" placeholder="Password"></input>
                <Link to="/list">
                    <button style={button}>LOGIN</button>
                </Link>
                <Link to="/register">
                    <p style={bottomText}>Create New Account</p>
                </Link>
            </form>
        </div>
        )
}

export default Login