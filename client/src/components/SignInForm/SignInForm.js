import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Typography,
    makeStyles,
    Container,
    Modal,
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, -2),
    },
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const SignInForm = () => {
    const classes = useStyles();
    const history = useHistory();
    const [modalStyle] = React.useState(getModalStyle);
    const [loginErrorOpen, setLoginErrorOpen] = React.useState(false);

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            'http://localhost:5000/login',
            loginData
        );

        const responseStatus = response.status;

        if (responseStatus === 200) {
            Cookies.set('username', response.data.username);
            Cookies.set('token', response.data.token);
            history.push('/');
        } else {
            setLoginErrorOpen(true);
        }
    };

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    function handleRegisterClick() {
        history.push('/register');
    }

    const bodyLoginError = (
        <div style={modalStyle} className={classes.modal}>
            <h2 id='simple-modal-title'>Anmeldung fehlgeschlagen!</h2>
            <p id='simple-modal-description'>
                Benutzername oder Passwort ist falsch.
            </p>
        </div>
    );

    const handleLoginErrorClose = () => {
        setLoginErrorOpen(false);
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Benutzername'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        onChange={(e) =>
                            setLoginData({
                                ...loginData,
                                username: e.target.value,
                            })
                        }
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Passwort'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={(e) =>
                            setLoginData({
                                ...loginData,
                                password: e.target.value,
                            })
                        }
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        ANMELDEN
                    </Button>
                    <Modal
                        open={loginErrorOpen}
                        onClose={handleLoginErrorClose}
                        aria-labelledby='simple-modal-title'
                        aria-describedby='simple-modal-description'
                    >
                        {bodyLoginError}
                    </Modal>
                    <Button
                        type='register'
                        fullWidth
                        variant='contained'
                        color='secondary'
                        className={classes.submit}
                        onClick={handleRegisterClick}
                    >
                        REGISTRIEREN
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default SignInForm;
