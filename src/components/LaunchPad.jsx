import React from 'react';
import './LaunchPad.css';

class LaunchPad extends React.Component {
  render() {
    if (this.props.show) {
      return <div className="launchpad" onClick={this.props.hide} />;
    } else {
      return <></>;
    }
  }
}

export default LaunchPad;
