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
import Image from 'material-ui-image';
import error404 from './template/error404.jpg';

import useStyles from './styles';

const NotFound = () => {
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
            <Image className={classes.image} src={error404}></Image>
            <h1>Error 404</h1>
            <small>This is not the page you are looking for</small>
        </div>
    );
};

export default NotFound;
