import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemForm from './components/cataloge_item_form';
import Routes from './routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import LoginForm from "./components/login_form";

function App() {
    // localStorage.removeItem('token');
    if (!localStorage.getItem('token')) {
        return (<LoginForm/>)
    }
    return (
        <div className="App">
           {/* <Router>
                <div>
                    <header className="App-header">
                        <Link to="/item">Item</Link>
                    </header>

                    <Switch>
                        <Route path="/item">
                            <ItemForm/>
                        </Route>

                    </Switch>
                </div>
            </Router>*/}
            <ItemForm/>


        </div>
    );
}

export default App;
