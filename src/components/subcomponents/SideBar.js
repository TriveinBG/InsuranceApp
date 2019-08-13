import React from 'react';
import SideBarBtn from './SideBarBtn';
import { Link } from 'react-router-dom';

function SideBar() {

    const btnStyle = {
        backgroundColor: "brown",
        width: "100%",
        borderRadius: "50px",
        margin: "1px",
        padding: "5% 0",
        display: "flex",
        justifyContent: "center",
        fontWeight: "bold",
        color: "white",
        textDecoration: "none"
    }

    return(
        <div className="sidebar">
            <Link to='/addnew' style={btnStyle}>
                <SideBarBtn name="Add Insurance"/>
            </Link>
            <Link to='/list' style={btnStyle}>
                <SideBarBtn name="Current List"/>
            </Link>
            <Link to='/' style={btnStyle}>
                <SideBarBtn name="Log out"/>
            </Link>
        </div>
    )
}

export default SideBar;