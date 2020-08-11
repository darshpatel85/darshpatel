import React, { Component } from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
import p1 from '../images/5star.png';
import p2 from '../images/Hakerrank.png';
import p3 from '../images/coursera.png';
import p4 from '../images/GoogleIT.png';
function RenderCard({ name, image , git, body }) {
        return (
                    <Card className="">
                    <CardImg className="img-thumbnailborder-0 rounded-bottom-0 mx-auto d-block"src={image} alt={name} />
                    <Card className="border-0">
                        <CardBody>
                        <CardTitle><strong>{name}</strong></CardTitle>
                        <CardText>{body}</CardText>
                        <div className="theme"><a target="_blank" href={git}><i className="fa fa-external-link theme"></i></a></div>
                        </CardBody>
                    </Card>
                </Card>
        
        );
    }
const Certi =() => {
    return(
        <>
        <h1 className="display-4 header"><strong>ACCOMPLISHMENTS</strong></h1>
        <br/>
        <br/>
        <div className="d-flex justify-content-center">
            <div className="col-3"><RenderCard name="Problem Solving" image={p1} git="https://www.hackerrank.com/DaR5h_PatEl"/></div>
            <div className="col-3"><RenderCard name="Google IT Professional" image={p4} git="https://www.youracclaim.com/badges/4e789444-e38e-447c-99be-089b599f9cad/public_url"/></div>
            <div className="col-3"><RenderCard name="React" image={p3} git="https://www.coursera.org/account/accomplishments/certificate/A2H6YND42GPA"/></div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="d-flex justify-content-center">
            <div className="col-3"><RenderCard name="Python" image={p2} git="https://www.hackerrank.com/certificates/dd46f144d744"/></div>
            <div className="col-3"><RenderCard name="Bootstrap 4" image={p3} git="https://www.coursera.org/account/accomplishments/certificate/5J6R57PXQ4DQ" /></div>            
            </div>

        </>
    );
}
export default Certi;