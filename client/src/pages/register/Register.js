import React from 'react';

import {
    AppBar,
    Toolbar,
    CssBaseline,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SignUpForm from '../../components/SignUpFrom/SignInForm';

import useStyles from './styles';

const Register = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        BestBefore
                    </Typography>
                    <Button>Login</Button>
                </Toolbar>
            </AppBar>
            <SignUpForm />
        </div>
    );
};

export default Register;
