import React from 'react';
import "./Main.css";
import Posts from "../Posts/Posts";
import {getData} from "../services/getPosts";
// const apiUrl = 'http://localhost:9999/api/origami/';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:[]
        };
    }

    componentDidMount() {
        getData().then((data) => {
           // console.log("post data: "+data);
          this.setState({ data });
        });
    }
//     fetch(apiUrl)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             return data
//         }).then((data) => {
//             console.log("post data: "+data);
//             this.setState({ data });
//         }).catch(error => console.error(error));

    
    render(){
        //this.props.appState()
        //console.log(this.state)
        return(<div className = "Main">
                <h1>Publications</h1>
               <Posts data={this.state.data} />
            </div>
        )
    }

}


export default Main