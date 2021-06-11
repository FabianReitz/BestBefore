import React from 'react';

import {
    CssBaseline,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from '@material-ui/core';
import error404 from './assets/error404.jpg';
import useStyles from './styles';
import Appbar from '../../components/Appbar/appbar';

const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Appbar position='static'></Appbar>
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
