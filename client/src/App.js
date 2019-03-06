import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    error: null,
    data: [],
    isLoaded: false,
  };

  componentWillMount() {
    fetch("api/forecast")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          data
        });
      },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>When you are landlocked</h1>
        </header>
      </div>
    );
  }
}

export default App;
