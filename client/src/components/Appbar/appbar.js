import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    AppBar,
    Typography,
    Toolbar,
    IconButton,
    CssBaseline,
    Menu,
    MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

import { getItems } from '../../actions/items';
import useStyles from './styles';

const Appbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    let history = useHistory();
    function handleClick() {
        history.push('/login');
    }

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
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id='simple-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Darkmode</MenuItem>
                        <MenuItem onClick={(handleMenuClose, handleClick)}>
                            Logout
                        </MenuItem>
                    </Menu>
                    <Typography variant='h6' className={classes.title}>
                        BestBefore
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Appbar;
