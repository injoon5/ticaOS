/* eslint-disable no-new-func */
import React from 'react';
// import Routes from './Routes';
import TaskBar from './components/TaskBar';
import Window from './components/Window';
import Context from './components/Context';
import apps from './apps';

import './App.css';

interface Props {}

interface State {
  apps: any;
  top: number;
  context: boolean;
  contextLoaction: object;
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      apps,
      top: 1,
      context: false,
      contextLoaction: [0, 0],
    };
  }
  render() {
    return (
      <div
        className="App"
        onContextMenu={(e) => {
          e.preventDefault();
          this.setState({ context: true, contextLoaction: [e.clientX, e.clientY], });
        }}
        onClick={() => {
          if (this.state.context) {
            this.setState({ context: false });
          }
        }}
      >
        <TaskBar sans={this} />
        {this.state.apps.map((value: object, index: number) => {
          return <Window key={index} index={index} sans={this} {...value} />;
        })}
        <Context show={this.state.context} location={this.state.contextLoaction} />
      </div>
    );
  }
}

export default App;
