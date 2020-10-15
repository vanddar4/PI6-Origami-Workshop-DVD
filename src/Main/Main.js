import React from 'react';
import "./Main.css";
import Posts from "../Posts/Posts"
import {getData} from "../services/getPosts";

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data:[]
        };
    }

    componentDidMount() {
        getData().then((data) => {
          this.setState({ data });
        });

      }
    
    render(){

        return(<div className = "Main">
                <h1>Publications</h1>
               <Posts data={this.state.data} />
            </div>
        )
    }

}


export default Main