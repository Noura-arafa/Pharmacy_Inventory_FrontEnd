import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemForm from './components/cataloge_item_form';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import LoginForm from "./components/login_form";
import Transaction from "./components/transaction";
import ItemTable from "./components/item_table";
import Nav from "./components/nav";
import ItemDetails from "./components/item_detail";

function App() {
    localStorage.removeItem('token');
    /*localStorage.removeItem('token');
    if (!localStorage.getItem('token')) {
        return (<Router><LoginForm/></Router>)
    }*/
    return (
        <Router>
            <div className="App">
                <div>
                    <Nav/>
                    <Route exact path="/item" component={ItemForm}/>
                    <Route exact path="/" component={LoginForm}/>
                    <Route exact path="/login" component={LoginForm}/>
                    <Route exact path="/transaction/:id" component={Transaction}/>
                    <Route exact path="/items" component={ItemTable}/>
                    <Route exact path="/item/:id" component={ItemDetails}/>
                </div>
                {/*<ItemForm/>*/}

            </div>
        </Router>

    );
}

export default App;
