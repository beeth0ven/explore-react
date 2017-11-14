import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap'

export default class Code extends Component {

  constructor({ code }) {
    super();

    this.state = {
      isShow: false,
      code
    }
  }

  onToggleShowCode = () => this.setState({ isShow: !this.state.isShow });

  render() {
    return (
      <div>
        <Button bsStyle="success" onClick={this.onToggleShowCode}>
          { !this.state.isShow ? 'Show Code' : 'Hide Code' }
        </Button>
        <Panel collapsible expanded={this.state.isShow}>
          <pre>{this.state.code}</pre>
        </Panel>
      </div>
    )
  }
}
