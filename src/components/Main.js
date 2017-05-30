import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div id='main' >
        <div id='main__text'> Please Type Patient's Last Name </div>
      </div>
    );
  }
}

Main.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Main