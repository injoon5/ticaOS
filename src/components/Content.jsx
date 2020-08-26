import React from 'react';

class Content extends React.Component {
  render() {
    let test = this.props.contentX
    const Tmp = require(`../apps/${test}/index`).default;
    return <Tmp sans={this.props.sans} />;
  }
}

export default Content;
