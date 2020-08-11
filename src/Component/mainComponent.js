import React, { Component } from 'react';
import {Nav,NavItem,Navbar,NavbarToggler,Collapse} from 'reactstrap';
import {Scrollspy } from 'reactstrap-scrollspy';
import Header from './headerComponent';
import Footer from './footerComponent';
import Skill from './skillComponent';
import Project from './projectComponent';
import Education from './educationComponent';
import Certi from './certiComponent';
import NavBar from './navbarComponent';
class Main extends React.Component {
    render(){
    return (
        <div className="container-fluid bg-dark">

            <Header/>
            <br/>
            <br/>
            <Skill/>
            <br/>
            <br/>
            <Certi/>
            <br/>
            <br/>
            <Project/>
            <br/>
            <br/>
            <Education/>
            <br/>
            <br/>
            <Footer/>
            
            </div>
    
        );
    }
}

export default Main;