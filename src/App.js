import React, { Component } from 'react'
import Button from './common/button/Button'
import Header from './common/header/Header'
import FaBars from 'react-icons/lib/fa/bars'
import FaSearch from 'react-icons/lib/fa/search'
import TextInput from './common/inputs/text/TextInput'
import Select from './common/inputs/select/Select'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Patient's Name" leftIcon={<FaSearch />} rightIcon={<FaBars />} />
        <div className='container'>
          <Button text='Create New Patient' icon />
          <TextInput />
          <Select  />
        </div> 
      </div>
    );
  }
}

export default App;
