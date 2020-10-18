import React from 'react';
import { withRouter } from 'react-router-dom';
import "./User.css";
import Posts from "../Posts/Posts";
import {getUserInfo} from "../services/getUserInfo";
import {getUserPosts} from "../services/getUserPosts";
import {logoutUser} from "../services/logoutUser";
class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:undefined
        }
        this.buttonHandler= this.buttonHandler.bind(this);
    }
    componentDidMount() {
        if(document.cookie.indexOf("x-auth-token") === -1){
            this.props.history.push("/404");
            return;
        }
        getUserPosts().then((data) => {
            console.log(data)
            this.setState({ data });
            if(data&&data.length>0){
                getUserInfo(data[0].author).then(userData =>{
                    this.setState({userInfo:userData});
                })
            }else{
                getUserInfo().then(userData =>{
                    this.setState({userInfo:userData});
                });
            }

        });

      }

    // add logout button w/ appropriate method calls and a redirect to home page
    buttonHandler(event){
        event.preventDefault();
        logoutUser().then(res=>{
            console.log("are we changing pages?")
            
            console.log(document.cookie.indexOf("x-auth-token") === -1);
            console.log(res);
            if(res || document.cookie.indexOf("x-auth-token") === -1){
               
                this.props.history.push("/");
            }
        })
    }
    render(){

        //console.log(this.state);
        let email, postCount;
        
        if(this.state.userInfo){
            email = this.state.userInfo.username;
            postCount = this.state.userInfo.posts.length;
        }else{
            email = "";
            postCount = 0;
        }
        return(<div className = "Profile">
                <img src="https://via.placeholder.com/150x150.jpg" alt="profile-picture" />
                <div className="personal-info">
                    <p>
                        <span>Email:</span>
                        {email}
                    </p>
                    <p>
                        <span>Posts:</span>
                        {postCount}
                    </p>
                    <button onClick={this.buttonHandler} >Logout</button>
                </div>
                <div>
                    <h3>Last 3 posts to your wall</h3>
                    <Posts data={this.state.data} />
                </div>
                    
            </div>
        )
    }

}


export default withRouter(User);