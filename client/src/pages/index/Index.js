import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Grow, Grid, CssBaseline } from '@material-ui/core';

import { getItems } from '../../actions/items';
import Items from '../../components/Items/Items';
import Form from '../../components/Form/Form';
import Appbar from '../../components/Appbar/appbar';

import useStyles from './styles';

const Index = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Appbar></Appbar>
            <Grow in>
                <Container>
                    <br></br>
                    <Grid
                        container
                        justify='space-between'
                        alignItems='stretch'
                        spacing={1}
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
