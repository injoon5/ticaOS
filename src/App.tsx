/* eslint-disable no-new-func */
import React from 'react';
// import Routes from './Routes';
import TaskBar from './components/TaskBar';
import Window from './components/Window';

import './App.css';

class App extends React.Component<{}, { windowProps: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      windowProps: {},
    };
  }
  componentDidMount() {
    fetch(`/apps/Hello.tica`)
      .then((res) => res.text())
      .then((data) => {
        this.setState({
          windowProps: {
            title: 'ticaOS Hello',
            height: 300,
            width: 300,
            content: data,
          },
        });
      });
  }
  render() {
    return (
      <div className="App">
        <TaskBar />
        <Window {...this.state.windowProps} />
      </div>
    );
  }
}

export default App;
