import { Button, ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react';
import './CheckoutFood.css'
const CheckoutFood = (props) => {
    const [count , setCount] = useState(1);
    const dicrease = () => {
        if(count === 1){
            setCount(1)
        }else{
            setCount(count - 1);
            props.food.quantity = count;
        }
    }
    const increase = () => {
        
        setCount(count + 1);
        props.food.quantity = count;
    }
    return (
        <div className="checkoutFood shadow">
            
            <img src={props.food.figure} width="60px" alt="..."/>
            
            <div className="foodDetails">
                <h6 style={{textTransform: 'capitalize'}}>{props.food.name}</h6>
                <h4>${(props.food.price * count).toFixed(2)}</h4>
            </div>
            <div className="counter-area">
                
                <ButtonGroup className="btnGruop" variant="contained" color="primary">
                    <Button className="grup-btn" onClick={dicrease}>-</Button>
                    <Button className="grup-btn disabled-btn" disabled>{count}</Button>
                    <Button className="grup-btn" onClick={increase}>+</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default CheckoutFood;