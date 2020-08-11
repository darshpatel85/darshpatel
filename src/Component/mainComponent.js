import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Skill from './skillComponent';
import Project from './projectComponent';
import Education from './educationComponent';
import Certi from './certiComponent';
const Main = () => {
    return (
        <div className="container-fluid bg-dark">
            <Header/>
            <br/>
            <br/>
            <Skill />
            <br/>
            <br/>
            <Certi/>
            <br/>
            <br/>
            <Project />
            <br/>
            <br/>
            <Education/>
            <br/>
            <br/>
            <Footer />
        </div>
        )

}
export default Main;