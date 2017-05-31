import React, { Component } from 'react'
import moment from 'moment'
import FaAngle from 'react-icons/lib/fa/angle-right'
import Button from '../common/button/Button'
import { browserHistory } from 'react-router' 
import { connect } from 'react-redux'
import './List.css'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: this.props.array
    }
  }
  onClick() {
    browserHistory.push('/form')
  }
  render() {
    const results = this.state.results.map((patient, i) => {
      return (
        <div key={'patient ' + i} className='patient-list__item' >
          <div className='patient-list__left' >
            <div className='patient-list__left__text' >
              {patient.first_name + ' ' + patient.last_name}
            </div>
            <div className='patient-list__left__date' >
              {moment(patient.dob).calendar()}
            </div>
          </div>
          <div className='patient-list__middle' >
            <div className='patient-list__middle_text' >
              <div>{patient.address_street}</div>
              <div>{patient.address_city}</div>
            </div>
          </div>
          <div className='patient-list__right' >
            <div>
              <FaAngle />
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className='patient-list' >
          {results}
        </div>
        {results.lenght > 0 ? <div id='or' >
          or
        </div> : null }
        <div id='create-patient' >
          <Button text='Create New Patient' fill icon onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    array: state.patient.list.array,
  }
}

export default connect(mapStateToProps)(List)