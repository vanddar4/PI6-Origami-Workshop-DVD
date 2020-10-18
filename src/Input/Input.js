import React from 'react';

import "./Input.css";
import Posts from "../Posts/Posts";  

import {postData} from "../services/postData";
import {getUserPosts} from "../services/getUserPosts";
import { withRouter } from 'react-router-dom';
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
        this.input = React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
    }
    componentDidMount() {
        if(document.cookie.indexOf("x-auth-token") === -1){
            this.props.history.push("/404");
            return;
        }
        getUserPosts().then((data) => {
          this.setState({ data });
        });
    }
    submitHandler(event){
        //sennd the data
        //postData
        console.log("Submitted!");
        event.preventDefault();
        console.log(this.input.current.value);
        postData(this.input.current.value).then(data=>{
            console.log(data)
            this.props.history.push('/');
        });
        
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
                    <Posts data={this.state.data} />
                </div>
                    
            </div>
        )
    }

}


export default withRouter(Input)