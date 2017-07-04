import React, { Component } from 'react'
import Toggle from '../common/inputs/toggle/Toggle'
import { connect } from 'react-redux'
import { setStep } from '../actions/wizard'
import { browserHistory } from 'react-router'
import './Existing.css'

class Existing extends Component {
  static defaultProps = {
    options: [
      { title: 'New Prescription' },
      { title: 'Modify Prescription' }
    ]
  }

  handleClick = (i) => {
    if (i === 0) {
      this.props.setStep(1)
      browserHistory.push('/form')
    }
  }

  render() {
    return (
      <div className='Prescription' >
        <div className='prescription__header' >
          <span className='prescription__header__title' >Create or Renew Prescription</span>
          <div className='prescription__header__subtitle' >
            Extend the length of need for an existing prescription or create a new prescription
          </div>
        </div>
        <Toggle selected={0} options={this.props.options} onChange={this.handleClick} />
      </div>
    )
  }
}

export default connect(null, { setStep })(Existing)
