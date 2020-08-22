import React from 'react';
import './TaskBar.css';
import LaunchPad from './LaunchPad';

class TaskBar extends React.Component<
  {},
  { launchpad: boolean; taskbar: boolean }
> {
  constructor(props: any) {
    super(props);
    this.hide = this.hide.bind(this);
    this.state = {
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
