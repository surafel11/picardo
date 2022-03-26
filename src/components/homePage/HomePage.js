import React from 'react';
import { Grid, Button } from '@mui/material';

import Utils from '../../shared/utils';

import { useNavigate } from "react-router-dom";

function HomePage() {
    const utils = new Utils();
    const navigate = useNavigate();

    return (
        <Grid container direction="column" width="100%" height="100vh" justifyContent="center" alignItems="center">
            <h1> Home Page </h1>
            <Button variant='contained' color='primary' style={{color: "#fff"}} onClick={() => {
                utils.removeStoredToken();
                navigate('/auth');
            }}> Logout </Button>
        </Grid>
    );
}

export default HomePage;