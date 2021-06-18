import React from 'react';

import { CssBaseline } from '@material-ui/core';

import SignInForm from '../../components/SignInForm/SignInForm';
import AppBar from '../../components/Appbar/appbar';

import useStyles from './styles';

const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar></AppBar>
            <SignInForm />
        </div>
    );
};

export default Login;
