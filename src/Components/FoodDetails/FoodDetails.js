import { Button, ButtonGroup, Grid } from '@material-ui/core';
import React, { Children, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { FoodData } from '../../red-onion-data/FoodData';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './FoodDetails.css'
import Multicarousel from '../multicarosel/Multicarousel';
import { cartContext } from '../../App';
const FoodDetails = (props) => {
    let history = useHistory();
    const [cart , setCart] = useContext(cartContext);
    const {routeParam} = useParams();
    const clickedFood = FoodData.find(food => food.routeParam === routeParam);
    // const handleAddFood = () => {
    //     const newCart = [...cart , clickedFood];
    //     setCart(newCart)
    // }
    const [count , setCount] = useState(1)
    return (
        <div>
            <Grid container style={{margin: "120px  0"}}>
                <Grid item xs={12} md={6} className="details-text">
                    
                    <h1 className="clikedFoodName">{clickedFood.name}</h1>
                    <p className="foodDescrip">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, consectetur, quas accusamus eligendi ratione maxime eum eos saepe quo est placeat deserunt, deleniti aspernatur quibusdam iste magnam asperiores?</p>
                    
                    <p className="fPrice mb-5">${clickedFood.price}</p>
                    <Button className="m-0" variant="contained" color="secondary" onClick={()=> props.handleAddFood(clickedFood)}><ShoppingCartOutlinedIcon/> Add
                    </Button>
                    <Multicarousel />
                    <div className="text-center my-4 ">
                            {
                                cart.length > 0 ? <Button onClick={() => history.push("/Checkout")} variant="contained" color="secondary">Check out your food</Button>: <Button variant="contained" disabled color="secondary">Check out your food</Button>
                            }
                        </div> 
                </Grid>
                <Grid item xs={12} md={6} className="details-img-area">
                    <figure>
                        <img src={clickedFood.figure} width="400px " className='figure-img img-fluid' alt="Your Cliked Food"/>
                    </figure>
                </Grid>
            </Grid>
        </div>
    );
};

export default FoodDetails;