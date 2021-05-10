import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getItems } from './actions/items';
import Items from './components/Items/Items';
import Form from './components/Form/Form';
import useStyles from './styles';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useHistory } from 'react-router-dom'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const history = useHistory();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BestBefore
          </Typography>
          <Button onClick={() => history.push('/LoginForm')} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
            <Grow in>
                <Container>
                    <br></br>
                    <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                        <Grid item xs={12} sm={7}>
                            <Items />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

        
        
    );
};

export default App;