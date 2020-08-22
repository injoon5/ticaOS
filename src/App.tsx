import React from 'react';
// import Routes from './Routes';
import TaskBar from './components/TaskBar';
import Window from './components/Window';

import './App.css';

class App extends React.Component {
  render() {
    const windowProps = {
      title: 'sansOS Hello',
      height: 300,
      width: 300,
      content: <div>wa</div>,
    };
    return (
      <div className="App">
        <TaskBar />
        <Window {...windowProps} />
      </div>
    );
  }
}

export default App;
