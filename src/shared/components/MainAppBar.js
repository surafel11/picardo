import React from 'react';

import {Grid, Button, IconButton} from '@mui/material';

import picardoLogo from '../../assets/picardo_logo.png';

import Utils from '../utils';

import GoogleIcon from '@mui/icons-material/Google';

function MainAppBar() {

    const utils = new Utils();
    
  return (
    <Grid container direction="row" alignItems="center" width="100%" height="100px" paddingLeft={2} paddingRight={2}>
        <Grid item>
            <img src={picardoLogo} alt="Picardo logo" height={50} />
        </Grid>
        <Grid item flexGrow={1}>
        </Grid>
        <Grid item>
            <Button onClick={()=>console.log("Signup")}>
                Signup
            </Button>
        </Grid>
        &nbsp;
        <Grid item>
            <Button onClick={()=>console.log("Signup")}>
                Login
            </Button>
        </Grid>
        &nbsp;
        <Grid item>
            <IconButton onClick={() => {
                console.log("Google Clicked");
                // utils.signInWithGoogle();
            }}>
                <GoogleIcon color='secondary'/>

            </IconButton>
        </Grid>
    </Grid>
  );
}

export default MainAppBar;