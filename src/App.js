import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBarComponent/SideBar';
import Main from './components/MainComponent/Main';
import { HOME } from './constants/actionTypes';

function App() {
  const [currentMainComponent, setCurrentMainComponent] = useState(HOME);

  const handleSideBarItemClick = (mainComponent) => {
    setCurrentMainComponent(mainComponent);
  };

  return (
    <div className="App">
      <SideBar onSideBarItemClick={handleSideBarItemClick} />
      <Main currentMainComponent={currentMainComponent} />
    </div>
  );
}

export default App;
