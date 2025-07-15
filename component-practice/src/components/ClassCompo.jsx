import React from 'react';
///////////////////////////////////
///Dealing with class based components
//have to extends with React.component
//write in a render method

//Want to recieve props?get it through constructor my calling super()

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h3>Location</h3>
        <h4>Age</h4>
      </div>
    );
  }
}

export default User;
