import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';

const Items = () => {
    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();

    return (
        <>
            <Container className={classes.wrapper}>
                {items.map((item) => (
                    <Item
                        key={item._id}
                        item={item}
                        className={classes.card}
                    ></Item>
                ))}

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
