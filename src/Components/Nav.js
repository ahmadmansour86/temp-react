import React from 'react';
import {NavLink} from 'react-router-dom';
import { NavBar, Logo, LogoText, List, ListItem, Tab } from './NavStyle.js';

const Nav = () => {
    return(
        <NavBar>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <List>
                    <ListItem><NavLink className="sc-EHOje hgrNPn" to="/" exact>Home</NavLink></ListItem>
                    <ListItem><Tab href="#">Work</Tab></ListItem>
                    <ListItem><Tab href="#">Portfolio</Tab></ListItem>
                    <ListItem><Tab href="#">Resume</Tab></ListItem>
                    <ListItem><Tab href="#">About</Tab></ListItem>
                    <ListItem><NavLink className="sc-EHOje hgrNPn" to="/Contact" exact>Contact</NavLink></ListItem>
                </List>
                
            </div>
            
        </NavBar>
        
    )
}
export default Nav;