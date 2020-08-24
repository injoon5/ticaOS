import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let test = this.props.contentX
    const Tmp = require(`../apps/${test}/index`).default;
    return <Tmp sans={this.props.sans} />;
  }
}

export default Content;
