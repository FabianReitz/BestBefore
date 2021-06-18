import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Index from './pages/index/Index';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { getItems } from './actions/items';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/404' component={NotFound} />
                <Redirect to='/404' />
            </Switch>
        </Router>
    );
};

export default App;
