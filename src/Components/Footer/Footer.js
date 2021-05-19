import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './Footer.css'
import logo from '../../figures/logo.png'
const Footer = () => {
    return (
        <footer>
            <Container>
                <Grid container className="mb-4">
                    <Grid item xs={12} sm={4} md={8} lg={8}>
                        <a href="#"><img src={logo} className="figure-img img-fluid mb-4" alt="..."/></a>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} lg={4} className="d-flex justify-content-between">
                        <div className="footer-sub-area">
                            <li><a href="" target="_blank">about online food</a></li>
                            <li><a href="" target="_blank">read our blog</a></li>
                            <li><a href="" target="_blank">sign up to deliver</a></li>
                            <li><a href="" target="_blank">add your restaurant</a></li>
                        </div>
                        <div className="footer-sub-area">
                            <li><a href="" target="_blank">get help</a></li>
                            <li><a href="" target="_blank">Read FAQ's</a></li>
                            <li><a href="" target="_blank">wiew all cities</a></li>
                            <li><a href="" target="_blank">restarurants newar me</a></li>
                        </div>
                    </Grid>
                </Grid> 
                <div className="terms">
                    <a href="https://www.facebook.com/mustafiz.munna.58" target="_blank" rel="noopener noreferrer">Copyright2021 &copy; webDev Mustafiz</a>
                    <div className="extra">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Privace Policy</a><a href="http://" target="_blank" rel="noopener noreferrer">trems of use</a><a href="http://" target="_blank" rel="noopener noreferrer">Pricing</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;