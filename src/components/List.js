import React, { Component } from 'react'
import moment from 'moment'
import FaAngle from 'react-icons/lib/fa/angle-right'
import Button from '../common/button/Button'
import { browserHistory } from 'react-router'
import { setPatient } from '../actions/patient'
import { connect } from 'react-redux'
import './List.css'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: this.props.array || []
    }
    this.onButton = this.onButton.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onButton() {
    browserHistory.push('/form')
  }
  onClick(i) {
    this.props.setPatient({ patient: this.state.results[i] })
    browserHistory.push('/existing')
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ results: nextProps.array })
  }
  componentWillMount() {
    if (!this.props.array[0]) browserHistory.push('/')
  }
  componentWillUpdate() {
    if (!this.props.array[0]) browserHistory.push('/')
  }
  render() {
    const results = this.state.results[0] ? this.state.results.map((patient, i) => {
      return (
        <div key={'patient ' + i} className='patient-list__item' onClick={() => this.onClick(i)} >
          <div className='patient-list__left' >
            <div className='patient-list__left__text' >
              {patient.first_name + ' ' + patient.last_name}
            </div>
            <div className='patient-list__left__date' >
              {moment(patient.dob).format('MM/DD/YYYY')}
            </div>
          </div>
          <div className='patient-list__middle' >
            <div className='patient-list__middle_text' >
              <div>{patient.address_street}</div>
              <div>{patient.address_city ? patient.address_state ? patient.address_city + ',' + patient.address_state + ' ' : patient.address_city : patient.address_state}</div>
            </div>
          </div>
          <div className='patient-list__right' >
            <div>
              <FaAngle />
            </div>
          </div>
        </div>
      )
    }) : []
    return (
      <div>
        <div className='patient-list' >
          {results}
        </div>
        <div id='or' >
          or
        </div>
        <div id='create-patient' >
          <Button text='Create New Patient' fill icon onClick={this.onButton} />
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

export default connect(mapStateToProps, { setPatient })(List)