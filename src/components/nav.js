import {Link} from "react-router-dom";
import React from "react";
import '../App.css';
import LoginForm from "./login_form";

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return(
        <header className="App-header mb-4">
            <div className="row">
                <div className="col"><Link style={navStyle} to="/item">Item</Link></div>
                {/*<div className="col"><Link style={navStyle} to="/transaction">Transaction</Link></div>*/}
                <div className="col"><Link style={navStyle} to="/items">All Items</Link></div>
                <div className="col"><Link style={navStyle} to="/login">Login</Link></div>

            </div>

        </header>
    );
}

export default Nav;