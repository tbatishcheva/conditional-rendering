import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: true,
    };
  }

  handleClick = () => {
    const { condition } = this.state;

    this.setState({
      condition: !condition,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <b>{this.state.condition ? <img src={logo} className="App-logo" alt="logo" /> : ''}</b>
          <input onClick={this.handleClick} type="button" name="print" value="Hide/Show" />
        </header>
      </div>
    );
  }
}

export default App;
