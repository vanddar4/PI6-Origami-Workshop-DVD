import React from 'react';
import Link from "../Link/Link";

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <footer className="Footer">
                <Link nav="footer" links={["Post","Register","Login","Profile"]}/>
                <p>My Site &copy; 2020 </p>
            </footer>
        )
    }

}


export default Footer