import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemForm from './components/cataloge_item_form';
function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

       {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>

      <ItemForm />
    </div>
  );
}

export default App;
