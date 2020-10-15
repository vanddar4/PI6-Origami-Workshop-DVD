import React from 'react';
import "./User.css";
import Posts from "../Posts/Posts";
import {getData} from "../services/getPosts";
class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{}
        }
    }
    componentDidMount() {
        getData().then((data) => {
          this.setState({ data });
        });

      }

    // add logout button w/ appropriate method calls and a redirect to home page

    render(){

        return(<div className = "Profile">
                <img src="https://via.placeholder.com/150x150.jpg" alt="profile-picture" />
                <div className="personal-info">
                    <p>
                        <span>Email:</span>
                        myemail@email.com
                    </p>
                    <p>
                        <span>Posts:</span>
                        9
                    </p>
                   
                </div>
                <div>
                    <h3>Last 3 posts to your wall</h3>
                    <Posts data={this.state.data} />
                </div>
                    
            </div>
        )
    }

}


export default User;