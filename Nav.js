import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div>
                <nav>
                    <Link to="/">APP</Link> &nbsp;&nbsp;
                    <Link to="/home"> HOME </Link> &nbsp;&nbsp;
                    <Link to="/login">LOGIN</Link> &nbsp;&nbsp;
                    <Link to="/product"> PRODUCT </Link> &nbsp;&nbsp;
                    <Link to="/aboutus">ABOUT US</Link> &nbsp;&nbsp;
                    <Link to="/employee">EMPLOYEE</Link> &nbsp;&nbsp;
                    <Link to="/user"> User</Link> &nbsp;&nbsp; 
                    <Link to="/post"> Post</Link> &nbsp;&nbsp; 
                    {/*<Link to="/contact"> Contact</Link> &nbsp;&nbsp;*/} 
                    
                </nav>
            </div>
        )
    }
}

export default Nav;