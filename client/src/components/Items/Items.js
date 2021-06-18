import React from 'react';
import { Container } from '@material-ui/core';
import Item from './Item/Item';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Items = () => {
    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();
    const items = useSelector((state) => state.items);
    console.log(items); // Do what you want

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
