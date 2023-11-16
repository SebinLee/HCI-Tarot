import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Start from './screen/Start.tsx'



function App() {
  return (
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
  );
}

export default App;
