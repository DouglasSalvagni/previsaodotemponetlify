import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Erro from './pages/erro'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/erro' component={Erro} />
                <Route path='/:id' component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;