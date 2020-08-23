import React from 'react';
import './Context.css';

interface Props {
  show: boolean;
  location: any;
}

interface State {}

class Context extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.show) {
      return (
        <>
          <div
            className="context"
            style={{
              left: this.props.location[0],
              top: this.props.location[1],
            }}
          >
            <div className="item">복사</div>
            <div className="item">붙여넣기</div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Context;
