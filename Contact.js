import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Contact extends Component{
    render(){
        return(
            <div>
                <h1>Contact Component</h1>
                
                <Link to="/home/contact"> Contact </Link> &nbsp;&nbsp;
                <Link to="/contact/email"> Email </Link> &nbsp;&nbsp;
                <Link to="/contact/feedback"> Feedback </Link> &nbsp;&nbsp;
            </div>
        )
    }
}
export default Contact;