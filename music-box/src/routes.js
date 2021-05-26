import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddMusica from './pages/AddMusica';
import Inicial from './pages/Inicial';
import MinhasMusicas from './pages/MinhasMusicas';
import NotFound from './pages/NotFound';
import EditMusic from './pages/EditMusic'; //<-- editMusic aqui

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Inicial}/>
                <Route exact path="/add-musica" component={AddMusica}/>
                <Route exact path="/minhas-musicas" component={MinhasMusicas}/>
                <Route exact path={`/edit/:id`} component={EditMusic}/> {/*<-- editMusic aqui*/}
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>

    );
}

export default Routes;