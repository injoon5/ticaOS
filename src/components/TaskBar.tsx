import React from 'react';
import './TaskBar.css';
import LaunchPad from './LaunchPad';
import apps from '../apps';
import Window from './Window';

class TaskBar extends React.Component<
  { sans: any },
  { apps: any; launchpad: boolean; taskbar: boolean }
> {
  constructor(props: any) {
    super(props);
    this.hide = this.hide.bind(this);
    this.state = {
      apps,
      launchpad: false,
      taskbar: true,
    };
  }
  hide() {
    this.setState({ launchpad: false, taskbar: true });
  }
  render() {
    if (this.state.taskbar) {
      return (
        <>
          <div className="taskbar">
            <div
              className="item logo"
              onClick={() => this.setState({ launchpad: true, taskbar: false })}
            />
            <div className="space"></div>
            {this.state.apps.map((value: object, index: number) => {
              let tmp = this.props.sans.state.apps;
              return (
                <div
                  className="item logo"
                  key={index}
                  onClick={() => {
                    let state = this.props.sans.state;
                    state.apps[index].show = true;
                    this.props.sans.setState(state);
                  }}
                />
              );
            })}
          </div>
          <LaunchPad show={this.state.launchpad} hide={this.hide} />
        </>
      );
    } else {
      return (
        <>
          <LaunchPad show={this.state.launchpad} hide={this.hide} />
        </>
      );
    }
  }
}

export default TaskBar;
