import React, { Component } from 'react'
import Header from './common/header/Header'
import FaBars from 'react-icons/lib/fa/bars'
import FaSearch from 'react-icons/lib/fa/search'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Patient's Name" leftIcon={<FaSearch />} rightIcon={<FaBars />} />
        <div className='container'>
          {this.props.children}
        </div> 
      </div>
    );
  }
}

export default App;
