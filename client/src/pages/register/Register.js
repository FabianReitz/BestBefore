import React from 'react';

import { CssBaseline } from '@material-ui/core';

import AppBar from '../../components/Appbar/appbar';
import SignUpForm from '../../components/SignUpFrom/SignInForm';

import useStyles from './styles';

const Register = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar></AppBar>
            <SignUpForm />
        </div>
    );
};

export default Register;
