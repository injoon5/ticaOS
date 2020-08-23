import React from 'react';
import './LaunchPad.css';
import apps from '../apps';

class LaunchPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps,
    };
  }
  render() {
    if (this.props.show) {
      return (
        <div className="launchpad" onClick={this.props.hide}>
          <div className="background"></div>
          <div className="content">
            <div className="icon">wa</div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default LaunchPad;
