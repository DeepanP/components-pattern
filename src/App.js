import React from 'react';
import logo from './logo.svg';
import LoginDrawer from './components/loginDrawer';
import UtilityMenu from './components/utilityMenu';
import ControlledForm from './components/controlledForm';
import UncontrolledForm from './components/uncontrolledForm';
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
          Learn React Component Pattern
        </a>
      </header>
      <div>
      <h2>Higher Order Component</h2>
      Authentication Container-
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
      <h2>Controlled Component</h2>
      <details>
        <summary>
          Controlled form input
        </summary>
        <ControlledForm></ControlledForm>
      </details>
      <h2>UnControlled Component</h2>
      <details>
        <summary>
          UnControlled form input on submit
        </summary>
        <UncontrolledForm></UncontrolledForm>
      </details>
      </div>
    </div>
  );
}

export default App;
