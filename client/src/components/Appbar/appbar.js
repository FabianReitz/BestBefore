import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    TextField,
    AppBar,
    Typography,
    Button,
    Toolbar,
    IconButton,
    Modal,
    CssBaseline,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { getItems } from '../../actions/items';
import useStyles from './styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const Appbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.root} ${classes.form} ${classes.inputField}`}
            >
                <div>
                    <Typography variant='h4'>Login</Typography>

                    <TextField
                        id='username'
                        label='Benutzername'
                        variant='outlined'
                    />
                    <br></br>
                    <TextField
                        id='password'
                        label='Passwort'
                        variant='outlined'
                    />
                    <br></br>
                    <TextField
                        id='passwordRetype'
                        label='Passwort wiederholen'
                        variant='outlined'
                    />
                </div>
                <Button color='primary' variant='contained'>
                    Anmelden
                </Button>
            </form>
        </div>
    );

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
                    <Button onClick={handleOpen}>Login</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='Login'
                        aria-describedby='Hier kann ein Nutzer sich anmelden'
                    >
                        {body}
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Appbar;