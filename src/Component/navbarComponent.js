import React,{Component} from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

import { ScrollspyNavLink } from 'reactstrap-scrollspy'

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen:false,
        }

    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render(){
    return (
        <div className="container-fluid bg-dark ">
            <Navbar expand="md dark">
            <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className="fixed-top bg-dark d-flex justify-content-center">
                    <NavItem>
                        <ScrollspyNavLink name="Header">
                        <NavLink className="nav-link m-2 white active" href='#Header'>About Me</NavLink>
                        </ScrollspyNavLink>
                    </NavItem>
                    <NavItem>
                    <ScrollspyNavLink name="Skill">
                        <NavLink className="nav-link m-2 white" href='#Skill'>Skills</NavLink>
                        </ScrollspyNavLink>  
                        </NavItem>
                    <NavItem>
                    <ScrollspyNavLink name="Certi">
                        <NavLink className="nav-link m-2 white" href='#Certi'>Accomplishments</NavLink>
                        </ScrollspyNavLink>  
                        </NavItem>
                    <NavItem>
                    <ScrollspyNavLink name="Project">
                        <NavLink className="nav-link m-2 white" href='#Project'>Projects</NavLink>
                        </ScrollspyNavLink>
                        </NavItem>
                    <NavItem>
                    <ScrollspyNavLink name="Education">
                        <NavLink className="nav-link m-2 white" href='#Education'>Education</NavLink>
                        </ScrollspyNavLink>
                        </NavItem>
                    <NavItem>
                    <ScrollspyNavLink name="Footer">
                        <NavLink className="nav-link m-2 white" href='#Footer'>Contact me</NavLink>
                        </ScrollspyNavLink>
                        </NavItem>
                </Nav> 
                </Collapse>
            </Navbar>
            </div>
    );
    }
}
export default NavBar;