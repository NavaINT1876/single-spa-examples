import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { showFrameworkObservable, getBorder } from 'src/common/colored-border.js';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false,
    };
  }
  componentWillMount() {
    this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
  }
  render() {
    return (
      <div style={this.state.frameworkInspector ? {border: getBorder('react')} : {}}>
        {this.state.frameworkInspector &&
          <div>(built with React)</div>
        }
        <h1>Hello</h1>
      </div>
    );
  }
  componentWillUnmount() {
    this.subscription.dispose();
  }
}
