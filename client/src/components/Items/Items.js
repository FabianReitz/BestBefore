import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import useStyles from './styles';
import Item from './Item/Item';

const Items = () => {
    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();
    const items = useSelector((state) => state.items);
    const history = useHistory();

    const username = Cookies.get('username');
    const token = Cookies.get('token');

    if (!username || !token) history.push('/login');

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
