import React from 'react';

import useStyles from './styles';
import Fleisch_Icon from '../ItemIcons/Fleisch_Icon.jpg';

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

const Item = ({ item }) => {
    const classes = useStyles();

    // TODO: functions for tags
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
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
                title='Item'
                subheader='Menge'
            />
            <CardMedia
                className={classes.media}
                image={Fleisch_Icon}
                title='Fleisch_Icon'
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Gekauft am:
                </Typography>

                <Typography variant='body2' color='textSecondary' component='p'>
                    MHD:
                </Typography>

                <Typography variant='body2' color='textSecondary' component='p'>
                    Hersteller
                </Typography>

                <br></br>

                <Divider variant='middle' />

                <br></br>

                <Typography variant='body2' color='textSecondary' component='p'>
                    Tags:
                </Typography>

                <Chip label='Basic' />
                <Chip label='Disabled' disabled />
                <Chip
                    avatar={<Avatar>M</Avatar>}
                    label='Clickable'
                    onClick={handleClick}
                />
                <Chip
                    avatar={
                        <Avatar
                            alt='Natacha'
                            src='/static/images/avatar/1.jpg'
                        />
                    }
                    label='Deletable'
                    onDelete={handleDelete}
                />
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label='share'>
                    <ShareIcon />
                </IconButton>
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
