import React from 'react';
import Post from "../Post/Post";


class Posts extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props.data);
        const data = this.props.data;
        if(!data){
            return(
                <div className = "Posts"> 
                    <div>No Posts</div>
                </div>
            )
        }
        const posts = data.map((post) => <Post data = {post}/>);
        if(posts.length >0){
            return(
                <div className = "Posts"> 
                    {posts}
                </div>
            )
            
        }
        else{
            return(
                <div className = "Posts"> 
                    <div>No Posts</div>
                </div>
            )
        }
    }


    

}


export default Posts