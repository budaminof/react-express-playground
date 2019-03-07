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

  createWaves() {
    return this.state.data.map((item, i) => {
      return (
        <div className="wave-wrapper" style={{ height: `${item.size + 1}00px` }} key={i}>
          <div class="container">

            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
              <defs>
                <radialGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="rgb(252, 252, 237)" stop-opacity="1.0" />
                  <stop offset="25%" stop-color="rgb(254, 253, 244)" stop-opacity="1.0" />
                  <stop offset="100%" stop-color="rgb(183, 232, 235)" stop-opacity="1.0" />
                </radialGradient>
              </defs>

              <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ fill: 'url(#linear)' }}></path>
            </svg>

          </div>
        </div >
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>When you are landlocked</h1>
        </header>
        <main>
          {this.state.isLoaded ? this.createWaves() : null}
        </main>
      </div >
    );
  }
}

export default App;
