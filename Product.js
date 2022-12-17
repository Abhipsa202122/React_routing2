import React,{Component} from 'react';
import NavProduct from './NavProduct'
//import {Link} from 'react-router-dom';
import './Product.css'
class Product extends Component{
    // Json array 
products = [
    // JSON data - JSON : Javascript Object Notation 
       // Key : value pair
        {"id":"P100","name":"Laptop","price":45000},
        {"id":"P200","name":"Keyboard","price":2000},
        {"id":"P300","name":"Mouse","price":700},
        {"id":"P400","name":"Heapdhones","price":15000},
        {"id":"P500","name":"Printer","price":22000},
        {"id":"P600","name":"Scanner","price":8000},
        {"id":"P700","name":"Laptop Stand","price":2500},
        {"id":"P800","name":"Speakers","price":6000},
        {"id":"P900","name":"Headset","price":6800},
        {"id":"P1000","name":"Extension Box","price":900},
        {"id":"P1100","name":"Modem/ Router","price":4500}
    ]
    render(){
        return(
            <div>
                <h1> This is Product Component</h1>
                {/* {this.products}  -- throws an error  */}
                {/* USing lists and keys  */}
                <div style={{'backgroundColor':'beige','color':'blue'}}>

                    <NavProduct/>

                </div>
                {/*<Link to="/product/fashion"> Fashion </Link> &nbsp;&nbsp;
                <Link to="/product/electronic"> Electronic </Link> &nbsp;&nbsp;*/}
                <ul>
                    {this.products.map((values)=>(
                        <div>
                            <li>{values.id}</li>
                            <li>{values.name}</li>
                            <li>{values.price}</li>
                        </div>
                    ))}
                </ul>
                <table>
                    <thead>
                        <th> PRODUCTID</th> &nbsp;&nbsp;
                        <th> PRODUCTNAME </th> &nbsp;&nbsp;
                        <th> PRODUCTPRICE </th> &nbsp;&nbsp;
                    </thead>
                    <tbody>
                        {this.products.map((values,key)=>{
                            return(
                                <tr key={key}>
                                        <td>{values.id}</td> &nbsp;&nbsp;
                                        <td>{values.name}</td> &nbsp;&nbsp;
                                        <td>{values.price}</td> &nbsp;&nbsp;
                                </tr>
                            )
                        })}  
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Product;
