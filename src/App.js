import React, { Component } from 'react'
import Button from './common/button/Button'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Button text='Create New Patient' icon/>
      </div>
    );
  }
}

export default App;
