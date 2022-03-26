import React from 'react';
import {Grid, Button} from '@mui/material';

import Utils from '../../shared/utils';

import { useNavigate } from "react-router-dom";

function Authentication() {
    const utils = new Utils();
    const navigate = useNavigate();

    const onChange = () => {
        navigate("/home");
    }
    return (
        <Grid container direction="column">
            <h1> Authentication Page </h1>
            <Button variant='contained' color='primary' style={{color: "#fff"}} onClick={() => {
                utils.createUserAccount("surafelj27@gmail.com", "123456", onChange);
            }}> Create Account </Button>
            <br />
            <Button variant='contained' color='primary' style={{color: "#fff"}} onClick={() => {
                utils.signInUser("surafelm27@gmail.com", "123456", onChange);
            }}> Signin </Button>
        </Grid>
    );
}

export default Authentication;