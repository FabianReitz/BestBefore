import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
}));

const SignInForm = () => {
    const classes = useStyles();
    const history = useHistory();

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post('http://localhost:5000/login', loginData)
            .then((response) => {
                // Login is correct.
                const responseStatus = response.status;

                if (responseStatus === 200) {
                    Cookies.set('username', response.data.username);
                    Cookies.set('token', response.data.token);
                    history.push('/');
                }
            })
            .catch(function (error) {
                if (error.response) {
                    // Do stuff
                    console.log('Something went wrong');
                }
            });
    };

    function handleRegisterClick() {
        history.push('/register');
    }

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
