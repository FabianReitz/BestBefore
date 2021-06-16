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
            <Container className={classes.wrapper}>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
                <Item className={classes.card}></Item>
            </Container>
        </>
    );
};

export default Items;
