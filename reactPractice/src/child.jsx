import React from 'react';

export class Child extends React.Component {
  constructor() {
    super();
    // console.log('child constructor');
  }

  componentDidMount() {
    // console.log('child mounted');
  }

  render() {
    // console.log('Child render');
    return <div>I am child Render</div>;
  }
}
