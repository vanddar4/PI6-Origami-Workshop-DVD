import React from 'react';
import Link from "../Link/Link";

class Aside extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loggedIn:(document.cookie.indexOf("x-auth-token") !== -1)
        }
    }
    componentDidMount(){
        //console.log("Aside Rest");
        this.setState({
            loggedIn:(document.cookie.indexOf("x-auth-token") !== -1)
        });
    }
    render(){

        let link;
        //this.props.appState();
        if(this.state.loggedIn){
            link = <Link links={["Post","Profile"]}/>;
        }else{
            link = <Link links={["Register","Login"]}/>;
        }
        /* 
        "Post"
        ,"Profile"
         */
        return(
            <aside className="Aside">
                {link}
            </aside>
        )
       
    }

}


export default Aside