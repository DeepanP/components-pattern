import React from 'react';
import logo from './logo.svg';
import LoginDrawer from './components/loginDrawer';
import UtilityMenu from './components/utilityMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      Authontication Container as Higher Order Component-
      <details>
        <summary>
          Authenticated Login Drawer
        </summary>
        <LoginDrawer isAuthorized={true}></LoginDrawer>
      </details>
      <details>
        <summary>
          Non Authenticated Utility Menu
        </summary>
        <UtilityMenu isAuthorized={false}></UtilityMenu>
      </details>
      </div>
    </div>
  );
}

export default App;
