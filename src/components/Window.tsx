import React from 'react';
import Draggable from 'react-draggable';
import Content from './Content.jsx';

import './Window.css';

interface windowProps {
  title?: string;
  height?: number;
  width?: number;
  content?: any;
  index: number;
  sans?: any;
  contentX?: any;
}

interface windowState {
  code?: any;
  zIndex?: number;
  el: any;
}

class Window extends React.Component<windowProps, windowState> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: '',
      zIndex: 0,
      el: null,
    };
  }
  componentDidMount() {
    fetch(this.props.content)
      .then((res) => res.text())
      .then((data) => {
        this.setState({ code: data });
      });
  }
  render() {
    let test = this.props.contentX
    let style = {
      backgroundColor: '#ffffff',
      borderColor: '#e2e2e2',
      color: 'black',
    };
    if (this.props.sans.state.dark) {
      style.backgroundColor = '#222';
      style.borderColor = '#2e2e2e';
      style.color = 'white';
    }
    if (this.props.sans.state.apps[this.props.index].show) {
      return (
        <>
          <Draggable handle=".title">
            <div
              className={
                this.state.el === this.props.index
                  ? `window win${this.props.index}`
                  : 'window'
              }
              style={{ zIndex: this.state.zIndex, ...style }}
              onMouseDownCapture={() => {
                this.props.sans.setState({
                  top: this.props.sans.state.top + 1,
                });
                this.setState({ zIndex: this.props.sans.state.top });
              }}
            >
              <div className="buttons">
                <div
                  className="close"
                  onClick={() => {
                    let state = this.props.sans.state;
                    state.apps[this.props.index].show = false;
                    this.props.sans.setState(state);
                  }}
                >
                  <span className="closebutton">
                    <span>
                      <strong>x</strong>
                    </span>
                  </span>
                </div>
                <div className="minimize">
                  <span className="minimizebutton">
                    <span>
                      <strong>-</strong>
                    </span>
                  </span>
                </div>
                <div className="zoom">
                  <span className="zoombutton">
                    <span>
                      <strong>+</strong>
                    </span>
                  </span>
                </div>
              </div>
              <div
                className="title"
                style={{ width: this.props.width, ...style }}
              >
                {this.props.title}
              </div>
              <div
                className="content"
                style={{
                  width: this.props.width,
                  height: this.props.height,
                  ...style,
                }}
              >
                <Content contentX={test} sans={this.props.sans} />
              </div>
              {/*
              <div
                className="content"
                style={{ width: this.props.width, height: this.props.height }}
              >
                <Iframe url={this.state.code} />
              </div>
              */}
            </div>
          </Draggable>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Window;
