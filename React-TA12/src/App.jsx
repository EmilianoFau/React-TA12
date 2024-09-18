// src/App.jsx
import React from 'react';
import { UserProvider } from './Context';
import Display from './components/Display';

const App = () => {
  return (
    <UserProvider>
      <div>
        <Display />
      </div>
    </UserProvider>
  );
};

export default App;
