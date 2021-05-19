import React, { useState } from 'react';

import { chooseData } from '../../red-onion-data/choose';
import { Container, Grid } from '@material-ui/core';
import SingleChoose from './SingleChoose';
import './choose.css'

const ChooseContainer = () => {
    const [chooseReasons , setChooseResons] = useState(chooseData)
    return (
        <Container>
            <div className="section-text my-5">
                <h2>why you choose us...</h2>
                <p className="section-typograph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus excepturi ratione pariatur optio provident non officiis perferendis commodi</p>
            </div>
            <Grid container spacing={3}>
        {
            chooseReasons.map((re,idx) => <SingleChoose reason={re} key={idx}></SingleChoose>)
        }
        </Grid>
        </Container>
        
            
            
        
    );
};

export default ChooseContainer;