import React, { Component } from 'react';
import {Card,CardImg,CardText,CardBody,CardSubtitle,CardTitle} from 'reactstrap';
function RenderEdu({degree,scname,year,percentage})  {
    return (
        <Card className="text-left pl-4 pt-4 md" style={{backgroundColor:"darkgray"}}>
            <CardTitle><h3><strong className="theme">{degree}</strong></h3></CardTitle>
            <CardBody>
                <CardSubtitle className="blockquote">{scname}</CardSubtitle>
                <CardText>{percentage}</CardText>
                <span>{year}</span>
            </CardBody>
        </Card>
);
}
const Education =() => {
    return(
        <div className="container">
            <h1 className="display-4 header">Education</h1>
            <br/>
            <br/>
            <RenderEdu degree="B.E (Information Technology )" scname="Birla Vishvakarma Mahavidyalaya, Anand
" percentage="CPI : 7.00" year="2017 – 21
"/>
            <br/>
            <RenderEdu degree="HSC (GSHEB)" scname="Shri J M Chaudhari Sarvajanik Vidyalaya, Mehsana " percentage="Percentage : 84.33%" year="2015 – 17
"/>
            <br/>
            <RenderEdu degree="SSC (GSEB)" scname="Shri J M Chaudhari Sarvajanik Vidyalaya, Mehsana " percentage="Percentage : 78%" year="2014 – 15"/>
            <br/>
        </div>
    );
}
export default Education;