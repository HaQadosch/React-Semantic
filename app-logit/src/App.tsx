import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react'

import { Counter } from './components/Counter'
import { Contacts } from './components/Contacts'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Scroll down to see the magic.
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
      <main>
        <Container>
          <h1>React Hooks Context</h1>
          <Counter />
        </Container>
        <Container>
          <Contacts />
        </Container>
      </main>
    </div>
  );
}

export default App;
