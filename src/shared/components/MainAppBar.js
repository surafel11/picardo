import React from 'react';

import {Grid, Button} from '@mui/material';

import picardoLogo from '../../assets/picardo_logo.png';

function MainAppBar() {
  return (
    <Grid container direction="row" alignItems="center" width="100%" height="100px" paddingLeft={2} paddingRight={2}>
        <img src={picardoLogo} alt="Picardo logo" height={50} />
        <Grid items flexGrow={1}>
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
    </Grid>
  );
}

export default MainAppBar;