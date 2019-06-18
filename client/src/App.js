import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seus medicamentos ao alcance da sua mão.
        </p>
        <a
          className="App-link"
          href="/auth/google"
        >
          Cadastro com conta Google
        </a>
      </header>
    </div>
  );
}

export default App;
