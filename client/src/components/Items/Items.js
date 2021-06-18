import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';
import Item from '../Items/Item/Item';

const Items = () => {
    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();

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
