import React from 'react';

class Post extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className="Post">
                <img src="/blue-origami-bird.png" alt="blue-origami-bird"/>
                <div>
                    <div className="description">
                        {this.props.data.description}
                    </div>
                    <div>
                        <span>
                            Author name: {this.props.data.username}
                        </span>
                    </div>
                </div>
                
                
            </div>
        )
    }

}


export default Post