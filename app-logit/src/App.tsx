import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter'
import { Container } from 'semantic-ui-react'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      </main>
    </div>
  );
}

export default App;
