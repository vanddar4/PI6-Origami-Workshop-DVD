import React from 'react';
// import "./Navigation.css";
import Link from "../Link/Link";

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <nav className="Navigation"> 
                <Link nav="nav" links={["Post","Register","Login","Profile"]}/>
            </nav>
            
        )
    }

}


export default Navigation