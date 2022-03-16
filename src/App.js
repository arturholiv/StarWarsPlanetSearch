import React from 'react';
import Provider from './context/Provider';
import MainContent from './components/MainContetn';
import './App.css';

function App() {
  return (
    <Provider>
      <MainContent />
    </Provider>
  );
}
export default App;
