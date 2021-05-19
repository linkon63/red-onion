import { Button, Container, Grid, Link } from '@material-ui/core';
import { PowerInputSharp } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { cartContext } from '../../App';
import CheckoutFood from '../CheckoutFood/CheckoutFood';
import './Checkout.css'
const Checkout = (props) => {
    const [checkOutDetails , setCheckOutDetails] = useState('');
    const [count , setCount] = useState(1);
    const [cart , setCart] = useContext(cartContext)
    let history = useHistory();
    const handleHistory = () => {
        history.push("/placeorder")
    }
    const dicrease = () => {
        if(count === 1){
            setCount(1)
        }else{
            setCount(count - 1);
        }
    }
    const increase = (e) => {
        
        setCount(count + 1);
        
    }
    return (
        <Grid container  spacing={10}>
            <Grid item xs={12} md={6}>
                <div className="checkoutForm">
                <h2>Edit Delivery Details</h2>
                <form onSubmit={(e)=>{
                    props.handleSubmit(checkOutDetails);
                    e.preventDefault();
                    }}>
                    
                    <input type="text" placeholder="Your Address" value={checkOutDetails} onChange={(e) => {
                        setCheckOutDetails(e.target.value);
                    }}/>
                    
                    
                    <input onClick={(e)=>{
                        props.handleSubmit(checkOutDetails);
                        e.preventDefault();
                        }} type="submit" value="Save and Continue"/>
                </form>

                <img src="https://i.ibb.co/jvnBJTS/eduardo-roda-lopes-198465-unsplash.png" alt="..." className="figure-img img-fluid"/>
                </div>
                
            </Grid>
            <Grid item xs={12} md={6}>
                <Container style={{padding: "20px" , width:"85%"}}>
                    <h6>From : <span style={{fontWeight: "bold"}}>Gulsan Pizza Restuara GPR</span></h6>
                    <h6>Arriving in 20-30 min </h6>
                    <h5 style={{textTransform: "capitalize"}}>{props.userArea}</h5>
                    {
                        cart.map((e , idx) => <CheckoutFood key={idx}  food={e} count={count} increase={increase} dicrease={dicrease}></CheckoutFood>)
                    }

                    {
                        (props.userArea!=='' && cart.length > 0) ?<Button className="mx-0 my-4" variant="contained" color="secondary" onClick={handleHistory}>palce Order</Button>: <Button className="mx-0 my-4" variant="contained" disabled color="secondary">Add Food and Address to place order</Button>
                    }
                </Container>
            </Grid>
        </Grid>
    );
};

export default Checkout;