import React, { Component } from 'react';

const Footer =() => {
    return(
        <div className="container">
            <h1 className="display-4 header">GET <strong>SOCIAL</strong></h1>
            <br/>
            <br/>
            <br/>
                        <div className="d-flex justify-content-center">
                        <a><i className="fa fa-linkedin fa-4x m-4 dark"></i></a>
                        <a><i className="fa fa-instagram fa-4x m-4 dark"></i></a>
                        <a><i className="fa fa-facebook fa-4x m-4 dark"></i></a>
                        <a><i className="fa fa-github fa-4x m-4 dark"></i></a>
                        <a><i className="fa fa-envelope fa-4x m-4 dark"></i></a>
                        <a><i className="fa fa-phone fa-4x m-4 dark"></i></a>
                        </div>
        </div>
    );
}
export default Footer;