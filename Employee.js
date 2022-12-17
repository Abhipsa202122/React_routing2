import React,{Component} from 'react';
import './Employee.css'
class Employee extends Component{
    employee= [

            {"empid":"P100","empname":"Hala","eage":30,"emplocation":"BANGLORE","Salary":46666},
            {"empid":"P200","empname":"Hamaja","eage":34,"emplocation":"GOA","Salary":45666},
            {"empid":"P300","empname":"Evan","eage":43,"emplocation":"MUMBAI","Salary":57676},
            {"empid":"P400","empname":"Horsil","eage":42,"emplocation":"KOLKOTA","Salary":36667},
            {"empid":"P500","empname":"Lipsa","eage":56,"emplocation":"BANGLORE","Salary":23667},
            {"empid":"P600","empname":"Twinkle","eage":46,"emplocation":"HYDRABAD","Salary":23563},
            {"empid":"P700","empname":"Miki","eage":44,"emplocation":"BANGLORE","Salary":35666},
            {"empid":"P800","empname":"Liza","eage":60,"emplocation":"CHENNAI","Salary":56666},
            {"empid":"P800","empname":"Liza","eage":60,"emplocation":"CHENNAI","Salary":54456},
            {"empid":"P900","empname":"James","eage":68,"emplocation":"BANGLORE","Salary":15455},
            {"empid":"P1000","empname":"Alex","eage":56,"emplocation":"DELHI","Salary":34566},
            {"empid":"P1100","empname":"Vansika","eage":45,"emplocation":"BANGLORE","Salary":55657},
            {"empid":"P1100","empname":"Khusi","eage":48,"emplocation":"HYDRABAD","Salary":20089}
        ]
        render(){
            return(
                <div>
                    <h1> This is Employee Component</h1>

                    <table>
                        <thead>
                            <th> EMPLOYEEID</th> &nbsp;&nbsp;
                            <th> EMPLOYEENAME </th> &nbsp;&nbsp;
                            <th> EMPLOYEEAGE </th> &nbsp;&nbsp;
                            <th> EMPLOYEELOCATION </th> &nbsp;&nbsp;
                            <th> EMPLOYEEUNIT </th> &nbsp;&nbsp;
                        </thead>
                        <tbody>
                            {this.employee.map((values,key)=>{
                                return(
                                    <tr key={key}>
                                            <td>{values.empid}</td> &nbsp;&nbsp;
                                            <td>{values.empname}</td> &nbsp;&nbsp;
                                            <td>{values.eage}</td> &nbsp;&nbsp;
                                            <td>{values.emplocation}</td> &nbsp;&nbsp;
                                            <td>{values.eunit}</td> &nbsp;&nbsp;
                                    </tr>
                                )
                            })}  
                        </tbody>
                    </table>
                </div>
            )
        }
} 
export default Employee;