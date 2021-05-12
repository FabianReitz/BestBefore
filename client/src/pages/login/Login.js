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

import useStyles from './styles';

const Login = () => {
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
        </div>
    );
};

export default Login;
