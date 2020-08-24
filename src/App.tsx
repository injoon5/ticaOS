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
  theme: string;
  dark: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      apps,
      top: 1,
      context: false,
      contextLoaction: [0, 0],
      theme: 'white',
      dark: true,
    };
  }
  render() {
    let style = {
      backgroundImage: 'url(/assets/wallpaper_light.png)'
    }
    if (this.state.dark) {
      style.backgroundImage = 'url(/assets/wallpaper_dark.png)'
    }
    return (
      <div
        className="App"
        onContextMenu={(e) => {
          e.preventDefault();
          this.setState({
            context: true,
            contextLoaction: [e.clientX, e.clientY],
          });
        }}
        onClick={() => {
          if (this.state.context) {
            this.setState({ context: false });
          }
        }}
        style={{ ...style }}
      >
        <TaskBar sans={this} ss={this.setState} />
        {this.state.apps.map((value: any, index: number) => {
          if (value.contentX === undefined) {
            return <Window key={index} index={index} sans={this} contentX={false} {...value} />;
          } else {
            return (
              <Window key={index} index={index} sans={this} contentX={value.contentX} {...value} />
            )
          }
        })}
        <Context
          show={this.state.context}
          location={this.state.contextLoaction}
        />
      </div>
    );
  }
}

export default App;
