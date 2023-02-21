import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form';
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

  addResy = newResy => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newResy)
    })
    .then(res => res)
    .then(data => {
      if(data.ok) {
        this.setState({reservations: [...this.state.reservations, newResy]})
      }
    })
  }

  deleteResy = id => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    this.setState({reservations: this.state.reservations.filter(reso => reso.id !== id)})
  }


  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addResy={this.addResy} />
        <Reservations deleteResy={this.deleteResy} reservations={this.state.reservations} />
      </main>
    )
  }
}

export default App;
