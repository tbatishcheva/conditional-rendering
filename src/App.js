import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDivShowed: true,
    };
  }

  handleClick = () => {
    const { isDivShowed } = this.state;

    this.setState({
      isDivShowed: !isDivShowed,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isDivShowed
            ? (
              <div><p>This is a paragraph.</p></div>
            )
            : ''}
          <input onClick={this.handleClick} type="button" value="Hide/Show" />
        </header>
      </div>
    );
  }
}

export default App;
