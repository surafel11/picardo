import React from 'react';
import {Grid, TextField} from '@mui/material';

function CompanyInformation({onChange, value}) {
    return (
        <Grid container direction="column" paddingLeft={2} paddingTop={2}>
            <h1> Company Information </h1>
            <br />
            <h3>Title</h3>
            <TextField
            value={value.title}
            onChange={(event) => {
                onChange({
                    title: event.target.value,
                    motto: value.motto
                });
            }}
            />
            <br />
            <h3>Motto</h3>
            <TextField
            value={value.motto}
            onChange={(event) => {
                onChange({
                    title: value.title,
                    motto: event.target.value
                });
            }}
            />
        </Grid>
    );
}

export default CompanyInformation;