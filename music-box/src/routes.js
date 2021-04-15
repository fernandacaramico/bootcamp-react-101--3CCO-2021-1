import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicial from './pages/Inicial';
import MinhasMusicas from './pages/MinhasMusicas';
import NotFound from './pages/NotFound';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Inicial}/>
                <Route exact path="/minhas-musicas" component={MinhasMusicas}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>

    );
}

export default Routes;