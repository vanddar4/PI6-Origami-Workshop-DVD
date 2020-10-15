import React from 'react';
import Link from "../Link/Link";

class Aside extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <aside className="Aside">
                <Link links={["Post","Register","Login","Profile"]}/>
            </aside>
        )
    }

}


export default Aside