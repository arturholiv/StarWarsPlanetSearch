import React from 'react';
import Provider from './context/Provider';
import MainContent from './components/MainContetn';

function App() {
  return (
    <Provider>
      <MainContent />
    </Provider>
  );
}
export default App;
