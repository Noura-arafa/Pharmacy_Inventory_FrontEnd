import React from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import App from "./App";
import ItemForm from "./components/cataloge_item_form";
import LoginForm from "./components/login_form";

export const Routes = () => {
    return (
        <Router>

            <div>
                <Switch>
                    <Route exact path="/App" component={App}/>
                    <Route exact path="/">
                        <Redirect to="/App"/>
                    </Route>
                    <Route exact path="/item" component={ItemForm}/>
                    <Route exact path="/login" component={LoginForm}/>
                </Switch>
            </div>
        </Router>
    );
};