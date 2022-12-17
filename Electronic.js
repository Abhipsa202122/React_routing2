import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Electronic extends Component{
    render(){
        return(
            <div>
                <h1>Electronic Component</h1>
                <Link to="/product/electronic"> Electronic </Link> &nbsp;&nbsp;
                <Link to="/electronic/mobile"> Mobiles </Link> &nbsp;&nbsp;
                <Link to="/electronic/printer"> Printers </Link> &nbsp;&nbsp;
                <Link to="/electronic/laptop"> Laptops </Link> &nbsp;&nbsp;
                <Link to="/electronic/scanner"> Scanners </Link> &nbsp;&nbsp;


            </div>

        )

    }

}

export default Electronic;