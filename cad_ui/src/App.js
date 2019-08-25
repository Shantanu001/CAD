import React from 'react';
import logo from './logo.svg';
import './App.css';
import DayTime from "../src/container/DayTime/DayTime";
import NightTime from "../src/container/NightTime/NightTime";
import Welcome from "../src/container/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome/>
    </div>
  );
}

export default App;
