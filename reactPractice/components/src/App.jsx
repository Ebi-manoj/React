import React from 'react';
import { Child } from './child';
import { Timer } from './timer';

export class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { count: 0, show: true };
  }
  componentDidMount() {
    console.log('didmount');
  }
  componentDidUpdate() {
    console.log('update');
  }
  render() {
    const { name, location } = this.props;
    console.log('rendered');
    return (
      <div>
        <h1>Hello</h1>
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h3>State:{this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
        <Child />
        {this.state.show && <Timer />}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show timer
        </button>
      </div>
    );
  }
}
