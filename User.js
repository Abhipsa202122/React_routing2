import React,{Component} from 'react';
import axios from "axios";
class User extends Component{
    constructor(){
        super();
        axios.get("https://jsonplaceholder.typicode.com/users")
            //invoke the axios call either get or post request
        // success

             .then(

                (response)=> {

                    // We are using JSON.stringify () to convert the json object into string

                    console.log("Entire response object " + JSON.stringify(response));

                    console.log("Only data :" + JSON.stringify(response.data));

                }

            )

        // failure

             .catch((error)=> console.log("Error occurred"))

        // either success or failure

             .finally(console.log("End of Axios component "));

             


         //  .then(response)=>{
            // We are using JSON.stringify () to convert the json object into string
             // console.log("Entire response object " + JSON.stringify(response));
             // console.log("Only data :" + JSON.stringify(response.data));
      //  }
    //)

         // success-resoonse -callback()
           //.then((response)=> console.log(response.data))
         // failure
          // .catch((error)=>console.log("Error occurred"))
 
         // either success or failure
          // .finally(console.log("End of Axios component "));
    }
    render(){
        return(
            <div>
                <h1>User Component</h1>
            </div>   
        )
    }
}
export default User;