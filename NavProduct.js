import React, { Component } from "react";
import {Link} from 'react-router-dom';

class NavProduct extends Component{
    render(){
        return(
          <div>
            <nav>
                <Link to="/product/fashion"> Fashion </Link> &nbsp;&nbsp;
                <Link to="/product/electronic"> Electronics </Link> &nbsp;&nbsp;
            
                </nav>
          </div>
        )
    }
}

export default NavProduct;