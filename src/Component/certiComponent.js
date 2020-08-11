import React, { Component } from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
import p1 from '../images/5star.png';
import p2 from '../images/Hakerrank.png';
import p3 from '../images/coursera.png';
import p4 from '../images/GoogleIT.png';
function RenderCard({ name, image , git, body }) {
        return (
                    <>
                    <CardImg className="bg-light img-thumbnail w-50 l-auto border-0 rounded-bottom-0 mx-auto d-block" style={{borderTopLeftRadius:25,borderTopRightRadius:25}} src={image} alt={name} />

                    <Card className="border-0">
                        <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{body}</CardText>
                        <a href={git}><span>link</span></a>
                    </CardBody>
                    </Card>
                </>
        
        );
    }
const Certi =() => {
    return(
        <>
        <h1 className="display-4 header"><strong>ACCOMPLISHMENTS</strong></h1>
        <br/>
        <br/>
        <div className="d-flex justify-content-center">
            <div className="col-3"><RenderCard name="Problem Solving" image={p1} git="" body="vsdfv"/></div>
            <div className="col-3"><RenderCard name="Google IT Professional" image={p4} git="" body="vsdfv"/></div>
            <div className="col-3"><RenderCard name="React" image={p3} git="" body="vsdfv"/></div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="d-flex justify-content-center">
            <div className="col-3"><RenderCard name="Python" image={p2} git="" body="vsdfv"/></div>
            <div className="col-3"><RenderCard name="Problem Solving" image={p2} git="" body="vsdfv"/></div>            
            </div>

        </>
    );
}
export default Certi;