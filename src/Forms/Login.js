import React from 'react';
import './Forms.css';
import {loginUser} from "../services/loginUser";
import { withRouter } from 'react-router-dom';

const emailRegex =new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
const passRegex =  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
const formIsValid = (errors) => {
    let valid = true;
    Object.values(errors).forEach(val => {
        if(val.length > 0){
            valid = false;
           
        }
    });
    return valid;
};


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            error:{
                email:"",
                password:"",
            }
        }
        this.handleInputChange= this.handleInputChange.bind(this);
        this.submitHandler= this.submitHandler.bind(this);
    }
    handleInputChange(event) { 
        let statePropName =  event.target.name;
        let newStateVal = event.target.value;
        this.setState({ 
            [statePropName]: newStateVal
         });
        
    }

    registerValidator(data){
            //console.log(data);
        let email = data.email;
        let errors = this.state.error;
        if(!email){
            this.setState(prevState => ({
                error: {                   // object that we want to update
                    ...prevState.error,    // keep all other key-value pairs
                    "email": 'This user does not exist'   
                }
            }));
            //break out of exectution
            
        }else{
            let error = data.message;
            if(error){
                this.setState(prevState => ({
                    error: {                   
                        ...prevState.error,    
                        "password": 'Invalid password'   
                    }
                }));
            }
        }
        // console.log(newStateVal);
        // console.log(emailRegex.test(newStateVal));
       
        
        
    }
    componentDidMount() {
        if(document.cookie.indexOf("x-auth-token") !== -1){
            this.props.history.push("/404");
        }
    }



    submitHandler(event){
        event.preventDefault();
        //console.log("fetch");
        //then validate
       // this.registerValidator(event);
        //check if any errors
        if(this.state.error.email =="" &&this.state.error.password ==""){
            //console.log("valid");
            loginUser(this.state.email,this.state.password).then(res=>{
                //console.log("back")
                console.log(document.cookie.indexOf("x-auth-token"));
                console.log(document.cookie.indexOf("x-auth-token") !== -1);

                if(document.cookie.indexOf("x-auth-token") === -1&& (typeof res == "string" || res == undefined)){
                    //error
                }else{
                   // console.log("logged in!");
                   // take token's value or bool of its being there 
                    // set it in some global object
                    this.props.history.push("/post");
                }

            })
            //redirect
            //
        }
        
       
    }
    render(){
        const {error} = this.state;
        return(
            <div className="Login">
                <h1>Login Page</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="text" name="email" id="email" onChange={this.handleInputChange}/>
                        <br/>
                        {error.email.length > 0 && 
                            <span className='error'>{error.email}</span>}
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" name="password" id="password" onChange={this.handleInputChange}/>
                        <br/>
                        {error.password.length > 0 && 
                            <span className='error'>{error.password}</span>}
                    </div>
                   
                    <div className="form-control">
                        <button type="submit">Login</button>
                    </div>
                    
                </form>
            </div>

        )
    }
}

export default withRouter(Login);