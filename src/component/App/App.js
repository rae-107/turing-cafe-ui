import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => this.setState({reservations: data}))
  }


  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
          <Reservations reservations={this.state.reservations} />
      </main>
    )
  }
}

export default App;
