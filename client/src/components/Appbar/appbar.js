import React from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    IconButton,
    CssBaseline,
} from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const Appbar = () => {
    const classes = useStyles();

    const history = useHistory();

    function handleClick() {
        Cookies.remove('username');
        Cookies.remove('token');
        history.push('/login');
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='logout'
                        onClick={handleClick}
                    >
                        <ExitToApp></ExitToApp>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        BestBefore
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Appbar;
