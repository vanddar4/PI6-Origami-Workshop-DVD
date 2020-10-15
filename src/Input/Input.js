import React from 'react';
import "./Input.css";
import {postData} from "../services/postData";
import { withRouter } from 'react-router-dom';
class Input extends React.Component{
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler(event){
        //sennd the data
        //postData
        console.log("Submitted!");
        event.preventDefault();
        this.props.history.push('/');
    }
    render(){

        return(<div className = "Input">
                <div>
                    <h1>Share your thoughts... </h1>
                    <form onSubmit={this.submitHandler}>
                        <textarea ref={this.input}></textarea>
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div>
                    <h3>Last 3 posts to your wall</h3>
                    {this.props.children}
                </div>
                    
            </div>
        )
    }

}


export default withRouter(Input)