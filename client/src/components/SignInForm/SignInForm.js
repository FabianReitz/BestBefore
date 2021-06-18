import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { logUserIn } from '../../actions/users';
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

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(logUserIn(loginData));
    };

    let history = useHistory();
    function handleClick() {
        history.push('/');
    }

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
                        onClick={handleClick}
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
