import React from 'react';
import Draggable from 'react-draggable';

import './Window.css';

interface windowProps {
  title?: string;
  height?: number;
  width?: number;
  content?: any;
}

interface windowState {}

class Window extends React.Component<windowProps, windowState> {
  render() {
    return (
      <>
        <Draggable>
          <div className="window">
            <div className="buttons">
              <div className="close">x</div>
            </div>
            <div className="title" style={{ width: this.props.width }}>
              {this.props.title}
            </div>
            <div
              className="content"
              style={{ width: this.props.width, height: this.props.height }}
              dangerouslySetInnerHTML={{__html: this.props.content}}
            />
          </div>
        </Draggable>
      </>
    );
  }
}

export default Window;
