import React, { Component } from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
import p2 from '../images/p2.jpg';
import p1 from '../images/p1.jpg';
import dp from '../images/dp.jpg';
function RenderCard({ name, image , git, body }) {
        return (
                <Card>
                    <CardImg src={image} alt={name} />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{body}</CardText>
                        <a href={git}><span>github</span></a>
                    </CardBody>
                </Card>
        );
    }
const Project =() => {
    return(
        <>
        <h1 className="display-4 header">PROJECTS</h1>
        <br/>
        <br/>
        <div className="row m-4 center">
            <div className="col-4"><RenderCard name="Restaurant Website " image={p1} git="https://github.com/darshpatel85/git-test" body="Simple Restaurant website along with course using
React and Bootstrap 4 for better understanding of
frameworks"/></div>
  <div className="col-4"><RenderCard name="Phone Assistant Android Application" image={p2} git="https://github.com/darshpatel85/Alice" body="A phone assistance app using React-Native and NPM
packages which do work like call, message,
WhatsApp, mail, basic calculation and open some
apps on just voice-command."/></div>
            <div className="col-4"><RenderCard name="Portfolio" image={dp} git="https://github.com/darshpatel85/darshpatel" body="Personal Portfolio website with React and reactstrap"/></div>
            
        </div>
        </>
    );
}
export default Project;