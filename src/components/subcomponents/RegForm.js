import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

function RegComp(props) {

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
        <div className='mainPage'>
            <form className='loginForm'>
                <input placeholder="Username" 
                       onChange={props.handleChange}
                       name="userName"
                       required>
                </input>
                <input type="password" 
                       placeholder="Password"
                       onChange={props.handleChange}
                       name="password"
                       required>
                </input>
                <input type="password" 
                       placeholder="Confirm Password"
                       name="confirmPassword"
                       onChange={props.handleChange}
                       required>
                </input>
                <input type='email' 
                       placeholder="E-mail"
                       onChange={props.handleChange}
                       name="email"
                       required>
                </input>
                <button style={button} onClick={(ev) => {
                                    ev.preventDefault()
                                    props.handleSubmit({
                                        username: props.user,
                                        password: props.pass,
                                        confirmPass: props.confirmPass,
                                        email: props.email
                                    })
                                    console.log(props.user)
                                    props.history.push("/");
                            }}>CREATE NEW ACCOUNT</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.newUser,
        pass: state.newPass,
        confirmPass: state.confirmPass,
        email: state.eMail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            dispatch({
                type: "UPDATE_REG",
                payload: {[event.target.name]: event.target.value}
            })
        },
        handleSubmit: (payload) => {
            dispatch({
                type: "SUBMIT_NEW_REG",
                payload,
                reg: true
            })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegComp));