import { Button, Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Location, LoginContext } from '../../App';
import mapImage from '../../map.jpg'
import './PlaceOrder.css'
import UseDate from './UseDate';
import deliver from "../../figures/deliver.png"
const PlaceOrder = () => {
    const [loggedInUser , setLoggedInUser] = useContext(LoginContext)
    const d = new Date();
    const [location , setLocation] = useContext(Location);
    
    return (
        <Grid container  spacing={10} className="pt-4">
            <Grid item xs={12} md={7}>
                <div className="map-figure shadow">
                    <img src={mapImage} className="figure-img img-fluid deliverimage" alt=""/>
                </div>
            </Grid>
            <Grid item xs={12} md={5}>
                <div className="contact">
                    <img src='https://i.ibb.co/qsVJt6x/Group-1151.png' className="mb-4" width='80px' alt=""/>
                    <div className="final-location">
                        <div className="style-Location">
                            <h5>Your Location</h5>
                            <h6 style={{color: "grey" , textTransform: "capitalize"}}>{location}</h6>
                        </div>
                        <div className="style-Location">
                            <h5>Shop Address</h5>
                            <h6 style={{color: "grey"}}>Gulsan Pizza Restuara GPR</h6>

                        </div>

                    </div>
                    <UseDate/>
                    
                    <div className="receiver d-flex justify-content-start align-items-center p-3">
                        <img src={deliver} alt="..." width="50px"/>
                        <div style={{paddingLeft: "10px"}}>
                            <h6>{loggedInUser.email}</h6>
                            <h6 style={{color: "grey" , fontSize: "12px"}}>Your Rider</h6>
                        </div>
                    </div>
                    
                    <Button variant="contained" className="m-0 mt-3 w-100" color="secondary">Contact</Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default PlaceOrder;