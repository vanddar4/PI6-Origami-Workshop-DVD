import React from 'react';
import Link from "../Link/Link";

class Footer extends React.Component{
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
            link = <Link nav="footer" links={["Post","Profile"]}/>;
        }else{
            link = <Link nav="footer" links={["Register","Login"]}/>;
        }
        /* 
        "Post"
        ,"Profile"
         */
        return(
            <footer className="Footer">
                {link}
                <p>My Site &copy; 2020 </p>
            </footer>
        )
    }

}


export default Footer