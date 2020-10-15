import React from 'react';
import './Forms.css';
import {createUser} from "../services/createUser";
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

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            rePassword:"",
            error:{
                email:"",
                password:"",
                rePassword:"",
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
        this.registerValidator(event);
    }

    registerValidator(event){
        
        let statePropName =  event.target.name;
        let newStateVal = event.target.value;
        // console.log(newStateVal);
        // console.log(emailRegex.test(newStateVal));
        let errors = this.state.error;
        switch(statePropName){
            case "email":
                if(emailRegex.test(newStateVal) === true){
                    console.log("Valid"); 
                    this.setState(prevState => ({
                        error: {                   // object that we want to update
                            ...prevState.error,    // keep all other key-value pairs
                            [statePropName]: ''       // update the value of specific key
                        }
                    }));
                }else{
                    this.setState(prevState => ({
                        error: {                
                            ...prevState.error, 
                            [statePropName]: "Please add a valid Email!"     
                        }
                    }));
                    
                }
                break;
            case "password":
                if(newStateVal.length<=4){
                    console.log("Not long enough!");
                    this.setState(prevState => ({
                        error: {                   
                            ...prevState.error,    
                            [statePropName]: "Please enter password with more than 4 charaacters."      
                        }
                    }));
                }else if(passRegex.test(newStateVal)){
                    console.log("Bad pass");
                    this.setState(prevState => ({
                        
                        error: {                   
                            ...prevState.error,    
                            [statePropName]: "Please enter password with:\nAt least 1 lowercase character.\nAt least 1 uppercase charater.\nAt least 1 number"      
                        }
                    }));
                }else{
                    console.log("good password");
                    this.setState(prevState => ({
                        error: {                   // object that we want to update
                            ...prevState.error,    // keep all other key-value pairs
                            [statePropName]: ''       // update the value of specific key
                        }
                    }));
                }
                break;
            case "rePassword":
                if(newStateVal === this.state.password){
                    this.setState(prevState => ({
                        error: {                   
                            ...prevState.error,    
                            [statePropName]: "passwords must match!"     
                        }
                    }));
                  
                }else{
                    this.setState(prevState => ({
                        error: {                   
                            ...prevState.error,    
                            [statePropName]: ''       
                        }
                    }));
                }
                break;

            default:
                break;
        }
    }



    submitHandler(event){
        event.preventDefault();
        if(formIsValid(this.state.error)){
        // fetch();//<--definetly happening     
            console.log("fetch");
            //this.history.push("/login")
        }
        else{
            console.log("Send error message");
        }
       
    }
    render(){
        const {error} = this.state;
        return(
            <div className="Register">
                <h1>Register Page</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name="email" id="email" onChange={this.handleInputChange}/>
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
                        <label>Password</label>
                        <input type="password" name="rePassword" id="rePassword" onChange={this.handleInputChange}/>
                        <br/>
                        {error.rePassword.length > 0 && 
                            <span className='error'>{error.rePassword}</span>}
                    </div>
                    <div className="form-control">
                        <button type="submit">Register</button>
                    </div>
                    
                </form>
            </div>

        )
    }
}

export default withRouter(Register);
