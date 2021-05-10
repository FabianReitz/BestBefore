import React from 'react';
import { TextField, Button, Typography, Paper, ListItemSecondaryAction } from '@material-ui/core';

import useStyles from './styles';


const Form = () => {
    const classes = useStyles();

    const handleSubmit = () => {

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6" >Ein Produkt hinzufügen</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    lable="Creator" 
                    fullWidth
                    value={ListItemSecondaryAction.creator}
                    // onChange={}
                />
            </form>

        </Paper>
    );
};

export default Form;