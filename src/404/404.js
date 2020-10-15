import React from 'react';
import "./404.css";

class FourOFour extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(<div className = "FourOFour">
                <h1>Something went wrong</h1>
               <img src="https://via.placeholder.com/150x150.jpg" alt="you cant see this then something we very wrong"/>
            </div>
        )
    }

}


export default FourOFour;