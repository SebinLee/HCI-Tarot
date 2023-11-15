import React from 'react'
import './App.css';

import { Signature } from './design/Logo.tsx';
import Header from './design/Header.tsx';
import Screen from './design/Screen.tsx';



function App() {
  return (
      <Screen>
        <Signature />
      </Screen>
  );
}

export default App;
