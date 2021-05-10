import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item/Item';
import useStyles from './styles';

const Items = () => {
    const items = useSelector((state) => state.items);

    
    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();
    
    console.log(items);

    return(
        <>
            <Item />
            <br></br>
            <Item />
        </>
    );
};

export default Items;