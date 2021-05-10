import React from 'react';

import useStyles from './styles';

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

//just 4 testing
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';



const Item = () => {

    // eslint-disable-next-line
    const classes = useStyles();
    


    //just 4 testing
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    
      const handleClick = () => {
        console.info('You clicked the Chip.');
      };




    return(
        <Card className={classes.root}>
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
        title="Item"
        subheader="Menge"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Gekauft am:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          MHD:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Hersteller
        </Typography>
        </CardContent>
        <CardContent>
        <Divider variant="middle" />
        </CardContent>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Tags: 
        </Typography>
        
        <Chip label="Basic" />
      <Chip label="Disabled" disabled />
      <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable"
        onDelete={handleDelete}
      />

      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      </Card>
    );
};

export default Item;