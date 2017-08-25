import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    }
  }

  onFirstChanged(newName) {
    this.setState({
      firstName: newName
    })
  }

  onLastChanged(newName) {
    this.setState({
      lastName: newName
    })
  }

  onEmailChanged(newName) {
    this.setState({
      email: newName
    })
  }

  //Render functions are used to tell React what to put on the virtual dom/dom
  render() {
    let firstStyle = {
      display: this.state.firstName ? 'none' : 'inline-block'
    }

    let lastStyle = {
      display: this.state.lastName ? 'none' : 'inline-block'
    }

    let emailStyle = {
      display: this.state.email ? 'none' : 'inline-block'
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome />
        </div>
        <p className="App-intro">
          <input placeholder="first"
            onChange={(e) => this.onFirstChanged(e.target.value)} />
            <span style={firstStyle} className="required">*required</span>
          <br />
          <input placeholder="last"
            onChange={(e) => this.onLastChanged(e.target.value)} />
            <span style={lastStyle} className="required">*required</span>
          <br />
          <input placeholder="email"
            onChange={(e) => this.onEmailChanged(e.target.value)} />
            <span style={emailStyle} className="required">*required</span>
          <br />
        </p>
      </div>
    );
  }
}

export default App;

function Welcome(){
  return (
    <h2>Welcome to React</h2>
  )
}