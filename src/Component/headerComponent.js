import React from 'react';
import {CardImg, CardBody, CardText} from 'reactstrap';
import dp from '../images/dp.png';
const Header =() => {
    return(
        <div className="bg-dark">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container-fluid row col-12 mt-4">
            <div className="col-sm-6 sm-invisible">
            <CardImg top src={dp} className="rounded"></CardImg>
            </div>
            <CardBody className="col-sm-6 align-center">
            <br/><br/>
                    <CardText>
                        
                        <h1 className="display-2 text-left"><strong>DARSH</strong> </h1><br/><h1 className="display-2 text-left theme" >PATEL</h1>
                    </CardText>
                    <br/>
                    <br/>
                    <br/>
                    <CardText>
                        <p className="blockquote text-left text-light">Dedicated student with acceptable skills in solving and analyzing problems, always ready to expand new skills in fastpaced global environment. Suitable for work as individual or in team.</p>    
                    </CardText> 
            </CardBody>

        </div>
    </div>

    );

}
export default Header;