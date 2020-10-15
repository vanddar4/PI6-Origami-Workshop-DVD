import React from 'react';
import {Link as NavLink} from 'react-router-dom';


class Link extends React.Component{
    constructor(props){
        super(props)
    }
/* <Link to="/catalog">Catalog</Link>
                */
    render(){
        let nav = this.props.nav;
        let linkData = this.props.links;
        let links = linkData.map((link)=>{
            let toMessage = `/${link.toLowerCase()}`;
            return (<li className="listItem">
            
                <NavLink to={toMessage}>{link}</NavLink> 
                
            </li>)
            
        })
        if(nav == "nav"){
            return(
                <ul>
                <NavLink to="/">
                    <img className="listItem" src="white-origami-bird.png" alt="home route image" />
                </NavLink> 
                    {links}
                </ul>
            )
        }else if(nav == "footer"){
            return(
                <ul>
                    {links}
                    <NavLink to="/">
                        <img className="listItem" src="blue-origami-bird-flipped.png" />
                    </NavLink>
                </ul>
            )
        }else{
            return(
                <ul>
                    {links}
                </ul>
            )
        }
    }

}


export default Link