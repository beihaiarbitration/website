import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-layout">
        <Topbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
