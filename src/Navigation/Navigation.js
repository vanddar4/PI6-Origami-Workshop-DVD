import React from 'react';
// import "./Navigation.css";
import Link from "../Link/Link";
// import LoggedInContext from '../context/user-context'

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loggedIn:(document.cookie.indexOf("x-auth-token") !== -1)
        };
    }
    componentDidMount(){
        //console.log("Nav Rest");
        this.setState({
            loggedIn:(document.cookie.indexOf("x-auth-token") !== -1)
        });
    }
    // componentDidUpdate(){
    //     this.setState({
    //         loggedIn:(document.cookie.indexOf("x-auth-token") !== -1)
    //     });
    // }
    render(){
        let link;
        //this.props.appState();
        if(this.state.loggedIn){
            link = <Link nav="nav" links={["Post","Profile"]}/>;
        }else{
            link = <Link nav="nav" links={["Register","Login"]}/>;
        }
        /* 
        "Post"
        ,"Profile"
         */
        return(
            <nav className="Navigation"> 
                {link}
            </nav>
            
        )
    }

}
/* 
      <LoggedInContext.Consumer>
                    {value=>{
                        if(value){
                            <Link nav="nav" links={["Post","Profile"]}/>
                        }else{
                            <Link nav="nav" links={["Register","Login"]}/>
                        }
                    }}
                </LoggedInContext.Consumer>     
             */

export default Navigation