import React, { Component } from 'react'
import CreatePatient from './CreatePatient'
import './Wizard.css'

class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0
    }
  }
  render() {
    const content = (() => {
      switch (this.state.step) {
        case 1:
          return <div>Hello</div>
          // return <Diagnosis />
        default:
          return <CreatePatient />
      }
    })()
    return (
      <div id='wizard' >
        {content}
      </div>
    );
  }
}

export default Wizard