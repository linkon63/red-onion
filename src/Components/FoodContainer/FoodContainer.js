import { Button, Container,} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState , useContext} from 'react';
import { cartContext, Location } from '../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import { FoodData } from '../../red-onion-data/FoodData';
import FoodItem from '../FoodItem/FoodItem';
import './FoodContainer.css'
import RouteContainer from './RouteContainer';
import FoodDetails from '../FoodDetails/FoodDetails';
import Checkout from '../Checkout/Checkout';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const convert = (arr) => {
    const res = {};
    arr.forEach((obj) => {
       const key = `${obj.routeParam}`;
       if (!res[key]) {
          res[key] = { ...obj, count: 0 };
       };
       res[key].count += 1;
    });
    return Object.values(res);
}
const FoodContainer = () => {
    const [cart , setCart] = useContext(cartContext);
    const [location , setLocation] = useContext(Location);
    const handleAddFood = (e) => {
        const newCart = [...cart , e];
        
        console.log(convert(newCart));
        setCart(convert(newCart))
        
    }
    const lunchFoods = FoodData.filter(food => food.category === 'lunch');
    const [foods , setFoods] = useState(lunchFoods);
    const [active , setActive] = useState(2);
    const handleFoods = (foodCat , idx) => {
        const filterdFood = FoodData.filter(food => food.category === foodCat);
        setActive(idx)
        setFoods(filterdFood);
    }
    const handleSubmit = (val) => {
        setLocation(val)
    }
    return (
        <Container className="my-5 foodContainer">
            
                
            
            
            
            <div className="route-area mb-5">
            <Router>
                <nav className="text-center my-4 button">
                    {/* <Link to="/home"><Button className={active === 4 ? "active" : ""} onClick={()=>setFoods(FoodData)} color="primary">All</Button></Link> */}
                    <Link to="/home"><Button className={active === 1 ? "active" : ""} onClick={()=>handleFoods('breakfast' , 1)} color="primary">Breakfast</Button></Link>
                    <Link to="/home"><Button className={active === 2 ? "active" : ""} onClick={()=>handleFoods('lunch' , 2)} color="primary">Lunch</Button></Link>
                    <Link to="/home"><Button className={active === 3 ? "active" : ""} onClick={()=>handleFoods('dinner' , 3)}  color="primary">Dinner</Button></Link>
                    <Button disabled className="disabled"><ShoppingCartOutlinedIcon className="login-itme" /><sup><span className="cart-lenght">{cart.length}</span></sup></Button>
                    
                </nav>
                <Switch>
                    <Route path="/home"> 
                        <RouteContainer>
                            {
                                foods.map((f,idx) => <FoodItem food={f} key={idx}></FoodItem>)
                            }
                        </RouteContainer>
                        <div className="text-center my-4 ">
                            {
                                cart.length > 0 ? <Link to="/Checkout"> <Button variant="contained" color="secondary">Check out your food</Button></Link> : <Button variant="contained" disabled color="secondary">Check out your food</Button>
                            }
                        </div>  
                    </Route>
                    
                    <Route path="/food/:routeParam">
                        <FoodDetails handleAddFood={handleAddFood}></FoodDetails>
                    </Route>
                            
                    <PrivateRoute path="/checkout">
                       <Checkout userArea={location} handleSubmit={handleSubmit}/>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <PrivateRoute path="/placeorder">
                        <PlaceOrder></PlaceOrder>
                    </PrivateRoute>

                    <Route exact path="/"> 
                        <RouteContainer>
                            {
                                foods.map((f,idx) => <FoodItem food={f} key={idx}></FoodItem>)
                            }
                            <div className="text-center my-4 ">
                                {
                                    cart.length > 0 ? <Link to="/Checkout"> <Button variant="contained" color="secondary">Check out your food</Button></Link> : <Button variant="contained" disabled color="secondary">Check out your food</Button>
                                }
                            </div>
                        </RouteContainer>
                    </Route>
                    
                </Switch>
            </Router>
            </div>

            
            
        </Container>
    );
};

export default FoodContainer;