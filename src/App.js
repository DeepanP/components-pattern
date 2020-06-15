import React from 'react';
import logo from './logo.svg';
import LoginDrawer from './components/loginDrawer';
import UtilityMenu from './components/utilityMenu';
import ControlledForm from './components/controlledForm';
import UncontrolledForm from './components/uncontrolledForm';
import ErrorBoundary from './components/errorBoundary';
import './App.css';
import LoginDrawerContext from './components/loginDrawerWithContext';
import { UserContext } from './context/userContext';
import Border from './containment/borderComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <h2>Error Boundary Component</h2>
      <details>
        <summary>
          Error Boundary Example
        </summary>
        <ErrorBoundary>
          <UtilityMenu isAuthorized={true} ></UtilityMenu>
        </ErrorBoundary>
      </details>
      <h2>Context Component</h2>
      <details>
        <summary>
          Context components
        </summary>
        <UserContext.Provider value='Guest User'>
            <LoginDrawerContext></LoginDrawerContext>
        </UserContext.Provider>
      </details>
      <h2>Containment /Composite Component</h2>
      <details>
        <summary>
          Border composition
        </summary>
        <Border>
          <UncontrolledForm></UncontrolledForm>
        </Border>
      </details>
      </div>
    </div>
  );
}

export default App;
