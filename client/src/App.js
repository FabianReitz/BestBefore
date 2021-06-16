import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import Index from './pages/index/Index';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
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
