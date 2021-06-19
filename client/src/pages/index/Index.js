import React from 'react';
import { Container, Grow, Grid, CssBaseline } from '@material-ui/core';
import Items from '../../components/Items/Items';
import Form from '../../components/Form/Form';
import Appbar from '../../components/Appbar/appbar';

import useStyles from './styles';

const Index = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Appbar></Appbar>
            <Grow in>
                <Container className={classes.container}>
                    <br></br>
                    <Grid
                        container
                        justify='space-between'
                        alignItems='stretch'
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <Form />
                        </Grid>
                        <Grid item xs={12}>
                            <Items />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
    );
};

export default Index;
