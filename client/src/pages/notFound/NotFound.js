import React from 'react';

import {
    AppBar,
    Toolbar,
    CssBaseline,
    IconButton,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'material-ui-image';
import error404 from './assets/error404.jpg';
import desert from './assets/desert.svg';
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
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={error404}
                    title='Contemplative Reptile'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        Error 404
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                    >
                        This is not the page you are looking for
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NotFound;
