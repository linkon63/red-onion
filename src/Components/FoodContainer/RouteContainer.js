import { Grid } from '@material-ui/core';
import React from 'react';

const RouteContainer = (props) => {
    return (
        <Grid container>
            {props.children}
        </Grid>
    );
};

export default RouteContainer;