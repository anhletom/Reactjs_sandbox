import React, { Component } from 'react';

class App extends Component {
  state = {
    likes: 0,
  };

addHandler = () => {
  this.setState({
    likes: this.state.likes + 1
  });
  console.log('addHandler was clicked')
};

removeHandler = () => {
  if (this.state.likes == 0) {
    return;
  }
  this.setState({
    likes: this.state.likes - 1
  });
  console.log('removeHandler was clicked')
};

resetHandler = () => {
  this.setState({
    likes: 0
  });
  console.log('resetHandler was clicked')
};


  render() {
    const isEven = this.state.likes % 2 === 0
    return (
      <div 
        style= {{backgroundColor : isEven ? 'pink' : 'lightblue'}}
        className={ isEven ? 'even': 'odd'}>
        <h1>Total likes: {this.state.likes}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
