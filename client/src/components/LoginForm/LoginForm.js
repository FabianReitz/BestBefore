import React from 'react';
import { TextField, Button, Typography, Paper, ListItemSecondaryAction, Container } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();


    return(
<form className={classes.root} noValidate autoComplete="off">
  <div><TextField id="username" label="Benutzername" variant="outlined" /></div>
  <div><TextField id="password" label="Passwort" variant="outlined" /></div>
  <div><TextField id="passwordRetype" label="Passwort wiederholen" variant="outlined" /></div>
</form>

    );
};

export default Form;