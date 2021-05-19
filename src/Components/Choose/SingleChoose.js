import { Avatar, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import './choose.css'

const SingleChoose = (props) => {
    const {img , avatar , title , discription} = props.reason;
    return (
        <Grid item lg={4} md={4} xs={6}>
            <figure className="figure">
                <img src={img} className="figure-img img-fluid w-100" alt=""/>
            </figure>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" style={{background: '#f0315a'}}>
                    {avatar}
                </Avatar>
                }
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="w-100">{discription}
                    <br/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">See more <ArrowForwardIcon className="arrow" /></a>
                </Typography>
            </CardContent>
        </Grid>
    );
};

export default SingleChoose;