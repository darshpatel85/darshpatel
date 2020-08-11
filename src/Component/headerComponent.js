import React, { Component } from 'react';
import {Nav,NavItem,Navbar,NavLink,Card,CardImgOverlay,CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import bg from '../images/bg.jpeg';
import dp from '../images/dp.jpg';
const Header =() => {
    return(
        <div className="bg-dark">
        <Card className="m-0 p-0 row border-dark fluid-container" style={{color:"whitesmoke"}}>
            <CardImg src={bg} alt="Background-img"></CardImg>
            <CardImgOverlay>
            <Navbar className="d-flex justify-content-center" expand>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to='/home'><span className="white">About Me</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/aboutus'><span className="white">Skills</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/menu'><span className="white">Projects</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contactus'><span className="white">Education</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contactus'><span className="white">Contact me</span></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <div className="container-fluid row mt-4">
            <CardBody className="col-6 align-center">
                    <CardTitle className="col-md">
                        <br/><br/>
                        <h1 className="display-1 text-left"><strong>DARSH</strong> </h1><br/><h1 className="display-2 text-left theme" >PATEL</h1>
                    </CardTitle>
                    <br/>
                    <br/>
                    <br/>
                    <CardText>
                        <p className="blockquote text-left">Dedicated student with acceptable skills in solving and analyzing problems, always ready to expand new skills in fastpaced global environment. Suitable for work as individual or in team.</p>    
                    </CardText> 
            </CardBody>
            <div className="col-6 sm-invisible">
            <CardImg top src={dp}></CardImg>
            </div>
            
            </div>
            </CardImgOverlay>
        </Card>
        </div>

    );

}
export default Header;