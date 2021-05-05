import React from 'react';
import Item from './Item/Item';

import useStyles from './styles';

const Items = () => {
    const classes = useStyles();
    
    return(
        <>
            <h1>ITEMS</h1>
            <Item />
            <Item />
        </>
    );
};

export default Items;