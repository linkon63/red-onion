import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css'
const FoodItem = (props) => {
    const {name , title ,price , figure , routeParam} = props.food
    console.log(routeParam);
    return (
        
        <Grid item xs={6} sm={4} md={4} lg={4} className="food-card text-center w-25">
            <Link to={`/food/${routeParam}`}>
                <figure className="card-img">
                    <img src={figure} className="img-fluid" alt="..." srcSet=""/>
                </figure>
                <div className="food-details">
                    <p className="fName">{name}</p>
                    <p className="fTitle">{title}</p>
                    <p className="fPrice">${price}</p>
                </div>
            </Link>
        </Grid>
        
    );
};

export default FoodItem;