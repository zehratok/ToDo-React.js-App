import React, { Component } from 'react';
import SideBar from './Sidebar/SideBar';
import MainContent from './MainContent/MainContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="mainContent">
          <MainContent />
        </div>
      </div>

    )
  }
}

export default App;
