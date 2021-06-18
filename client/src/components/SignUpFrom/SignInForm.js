import React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Modal,
    makeStyles,
    Container,
    Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createUser } from '../../actions/users';
import { useDispatch } from 'react-redux';

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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
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
    const dispatch = useDispatch();
    let history = useHistory();

    const [modalStyle] = React.useState(getModalStyle);

    const [validateOpen, setValidateOpen] = React.useState(false);
    const [repeatOpen, setRepeatOpen] = React.useState(false);
    const [usernameOpen, setUsernameOpen] = React.useState(false);
    const [newUserData, setUserData] = useState({
        username: '',
        password: '',
    });

    const handleValidateClose = () => {
        setValidateOpen(false);
    };

    const handleRepeatClose = () => {
        setRepeatOpen(false);
    };

    const handleUsernameClose = () => {
        setUsernameOpen(false);
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

    const bodyUsername = (
        <div style={modalStyle} className={classes.modal}>
            <h2 id='simple-modal-title'>Benutzername fehlt</h2>
            <p id='simple-modal-description'>
                Bitte gib einen Benutzernamen einen.
            </p>
        </div>
    );
    const bodyValidate = (
        <div style={modalStyle} className={classes.modal}>
            <h2 id='simple-modal-title'>Ungültiges Passwort</h2>
            <p id='simple-modal-description'>
                Das Passwort entspricht nicht den Vorgaben.
            </p>
        </div>
    );

    const bodyRepeat = (
        <div style={modalStyle} className={classes.modal}>
            <h2 id='simple-modal-title'>Registrierung nicht möglich</h2>
            <p id='simple-modal-description'>
                Die Passwörter stimmen nicht überein.
            </p>
        </div>
    );

    // Password Validator
    var passwordValidator = require('password-validator');

    var passwordSchema = new passwordValidator();
    passwordSchema.is().min(8); // Minimum length 8
    passwordSchema.is().max(20); // Maximum length 100
    passwordSchema.has().uppercase(); // Must have uppercase letters
    passwordSchema.has().lowercase(); // Must have lowercase letters
    passwordSchema.has().digits(2); // Must have at least 2 digits
    passwordSchema.has().not().spaces(); // Should not have spaces

    //Username Schema
    var usernameSchema = new passwordValidator();
    usernameSchema.is().min(6);
    usernameSchema.is().max(14);
    usernameSchema.has().not().symbols(); // Should not have Symbols

    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
        passwordRepeat: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameSchema.validate(registerData.username)) {
            if (registerData.password === registerData.passwordRepeat) {
                if (passwordSchema.validate(registerData.password)) {
                    //Create new User
                    newUserData.username = registerData.username;
                    newUserData.password = registerData.password;
                    dispatch(createUser(newUserData));

                    history.push('/login');
                } else {
                    setValidateOpen(true);
                }
            } else setRepeatOpen(true);
        } else setUsernameOpen(true);
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
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
                        id='username'
                        label='Benutzername'
                        name='username'
                        autoComplete='username'
                        autoFocus
                        onChange={(e) =>
                            setRegisterData({
                                ...registerData,
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
                            setRegisterData({
                                ...registerData,
                                password: e.target.value,
                            })
                        }
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='passwordRepeat'
                        label='Passwort wiederholen'
                        type='password'
                        id='passwordRepeat'
                        autoComplete='current-password'
                        onChange={(e) =>
                            setRegisterData({
                                ...registerData,
                                passwordRepeat: e.target.value,
                            })
                        }
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        //onClick={handleClick}
                    >
                        REGISTRIEREN
                    </Button>
                    <Modal
                        open={validateOpen}
                        onClose={handleValidateClose}
                        aria-labelledby='simple-modal-title'
                        aria-describedby='simple-modal-description'
                    >
                        {bodyValidate}
                    </Modal>
                    <Modal
                        open={repeatOpen}
                        onClose={handleRepeatClose}
                        aria-labelledby='simple-modal-title'
                        aria-describedby='simple-modal-description'
                    >
                        {bodyRepeat}
                    </Modal>
                    <Modal
                        open={usernameOpen}
                        onClose={handleUsernameClose}
                        aria-labelledby='simple-modal-title'
                        aria-describedby='simple-modal-description'
                    >
                        {bodyUsername}
                    </Modal>
                </form>
            </div>
        </Container>
    );
};

export default SignInForm;
