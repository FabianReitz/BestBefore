import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Item from './Item/Item';
import useStyles from './styles';

const Items = () => {
    const items = useSelector((state) => state.items);

    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();

    console.log(items);

    return (
        <>
            <Container>
                <br></br>
                <Grid
                    container
                    justify='space-between'
                    alignItems='stretch'
                    spacing={1}
                >
                    <Grid item xs={3}>
                        <Item />
                    </Grid>
                    <Grid item xs={3}>
                        <Item />
                    </Grid>
                    <Grid item xs={3}>
                        <Item />
                    </Grid>
                    <Grid item xs={3}>
                        <Item />
                    </Grid>
                </Grid>
            </Container>

            <br></br>
        </>
    );
};

export default Items;
