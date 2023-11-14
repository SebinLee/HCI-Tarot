import React from 'react'
import { Header } from './design/Header.tsx';

//@ts-ignore
import logo from './logo.svg';
import './App.css';
import { Signature } from './design/Logo.tsx';



function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Signature />
      </header>
    </div>
  );
}

export default App;
