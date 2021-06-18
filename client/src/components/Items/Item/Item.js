import React from 'react';

import useStyles from './styles';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
    Divider,
    Chip,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import meat from '../ItemIcons/meat.png';
import packaged from '../ItemIcons/food_packaged.png';
import eggs from '../ItemIcons/eggs.png';
import fruit from '../ItemIcons/fruit.png';
import vegetable from '../ItemIcons/vegetable.png';
import milk from '../ItemIcons/milk.png';
import softdrink from '../ItemIcons/soft_drink.png';
import liquor from '../ItemIcons/liquor.png';

const Item = ({ item }) => {
    const classes = useStyles();

    // TODO: functions for tags
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const imageToCategory = () => {
        switch (item.category) {
            case 'eggs':
                return eggs;
            case 'meat':
                return meat;
            case 'softdrink':
                return softdrink;
            case 'milk':
                return milk;
            case 'vegetable':
                return vegetable;
            case 'fruit':
                return fruit;
            case 'liquor':
                return liquor;
            default:
                return packaged;
        }
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                /*avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        */
                title={item.title}
                subheader={item.ammount}
            />
            <CardMedia
                className={classes.media}
                image={imageToCategory()}
                title={item.category}
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Gekauft am: {item.purchaseDate}
                </Typography>

                <Typography variant='body2' color='textSecondary' component='p'>
                    MHD: {item.bestBeforeDate}
                </Typography>

                <Typography variant='body2' color='textSecondary' component='p'>
                    Hersteller: {item.manufacturer}
                </Typography>

                <br></br>

                <Divider variant='middle' />

                <br></br>

                <Typography variant='body2' color='textSecondary' component='p'>
                    Tags:
                </Typography>
                {item.tags.map((tag) => (
                    <Chip label={tag.value} key={item._id} item={item}></Chip>
                ))}
                <Chip label='Basic' />
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    onClick={() => {
                        alert('clicked');
                    }}
                    aria-label='delete'
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Item;
