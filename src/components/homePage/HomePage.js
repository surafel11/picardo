import React from 'react';
import { Grid, Button, IconButton, TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Utils from '../../shared/utils';

import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `50px 50px 50px 50px`,
      },
    },
  },
}));

function HomePage() {
    const utils = new Utils();
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <Grid container direction="column" width="100%" height="100vh" justifyContent="center" alignItems="center" >
            <h1> Home Page </h1>
            <Grid item marginBottom={2}>
                <TextField
                    size='large'
                    placeholder="Search"
                    variant='outlined'
                    className={classes.root}
                    onChange={(e)=>{
                    //
                    }}
                    style={{ width: 800, backgroundColor: "#FFFFFF", borderColor:"#FFFFFF", borderRadius: "50px"}}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="start" >
                            <IconButton onClick={() => {
                                //
                            }}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                    
                    }}
                />
            </Grid>
            <Button variant='contained' color='primary' style={{color: "#fff"}} onClick={() => {
                utils.removeStoredToken();
                navigate('/auth');
            }}> Logout </Button>
            <br />
            <Button variant='contained' color='secondary' style={{color: "#000"}} onClick={() => {
                utils.removeStoredToken();
                navigate('/createcard');
            }}> Create Card </Button>
        </Grid>
    );
}

export default HomePage;