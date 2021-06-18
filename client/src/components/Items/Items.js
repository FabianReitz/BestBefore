import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import Item from './Item/Item';

const Items = () => {
    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();
    const items = useSelector((state) => state.items);

    console.log(items); // Do what you want

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
            </Container>
        </>
    );
};

export default Items;
