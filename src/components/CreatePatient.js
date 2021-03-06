import React, { Component } from 'react'
import TextInput from '../common/inputs/text/TextInput'
import Button from '../common/button/Button'
import Select from '../common/inputs/select/Select.js'
import { connect } from 'react-redux'
import { createPatient } from '../actions/patient'
import moment from 'moment'
import states from '../utils/states'
import 'react-datepicker/dist/react-datepicker.css'
import './CreatePatient.css'


class CreatePatiet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: this.props.patient.first_name || '',
      middle_name: this.props.patient.middle_name || '',
      last_name: this.props.patient.last_name || '',
      dob: this.props.patient.dob || '',
      address_street: this.props.patient.address_street || '',
      address_apt: this.props.patient.address_apt || '',
      address_city: this.props.patient.address_city || '',
      address_state: this.props.patient.address_state || 'CA',
      address_zip: this.props.patient.address_zip || '',
      address_country: this.props.patient.address_country || '',
      gender: this.props.patient.gender || 'MALE',
      phone: this.props.patient.phone || '',
      email: this.props.patient.email || '',
      error: {
        first_name: false,
        middle_name: false,
        dob: false
      },
      selected: {
        gender: 0,
        address_state: 4
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.isValid = this.isValid.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onClick() {
    if (this.isValid()) {
      this.props.createPatient(this.state)
    } else {
      alert("Please provide a first name, last name, and Date of Birth.")
    }
  }
  onSelect(index, value, name) {
    this.setState({ [name]: value, selected: Object.assign({}, this.state.selected, { [name]: index }) })
  }
  handleChange(e) {
    const dob = moment(e.target.value).format('YYYY-MM-DD')
    this.setState({ dob })
  }
  isValid() {
    if (!this.state.first_name || !this.state.last_name || !this.state.dob) {
      let err = {}
      err.first_name = false
      err.last_name = false
      err.dob = false
      if (!this.state.first_name) {
        err.first_name = true
      }
      if (!this.state.last_name) {
        err.last_name = true
      }
      if (!this.state.dob) {
        err.dob = true
      }
      this.setState({ error: err })
      return false
    }
    else {
      return true
    }
  }
  render() {
    return (
      <div className='create-patient' >
        <div className='create-patient__row' >
          <div id='create-patient__first-name' >
            <TextInput label='First Name' name='first_name' value={this.state.first_name} onChange={this.onChange} stl={this.state.error.first_name ? 'form-item error' : null} />
          </div>
          <div id='create-patient__middle-name' >
            <TextInput label='Middle Name' name='middle_name' value={this.state.middle_name} onChange={this.onChange} />
          </div>
          <div id='create-patient__last-name' >
            <TextInput label='Last Name' name='last_name' value={this.state.last_name} onChange={this.onChange} stl={this.state.error.last_name ? 'form-item error' : null} />
          </div>
          <div id='create-patient__dob' >
            {/*<TextInput label='Date of Birth' name='dob' value={this.state.dob} onChange={this.onChange} stl={this.state.error.dob ? 'form-item error' : null} />*/}
            <div className="input-group">
              <label>DATE OF BIRTH</label>
              <input type='date' onChange={this.handleChange} value={this.state.dob} className={this.state.error.dob ? 'form-item error' : 'form-item'} id='input-group__dob' />
            </div>
          </div>
        </div>
        <div className='create-patient__row' >
          <div id='create-patient__street-address' >
            <TextInput label='Street Address' name='address_street' value={this.state.address_street} onChange={this.onChange} />
          </div>
          <div id='create-patient__city' >
            <TextInput label='City' name='address_city' value={this.state.address_city} onChange={this.onChange} />
          </div>
          <div id='create-patient__state' >
            <Select label='state' name='address_state' selected={this.state.selected.address_state} options={states} onChange={this.onSelect} />
          </div>
          <div id='create-patient__zip-code' >
            <TextInput label='Zip Code' name='address_zip' value={this.state.address_zip} onChange={this.onChange} />
          </div>
        </div>
        <div className='create-patient__row' >
          <div id='create-patient__gender' >
            <Select label='gender' name='gender' options={['MALE', 'FEMALE']} selected={this.state.selected.gender} onChange={this.onSelect} />
          </div>
          <div id='create-patient__phone' >
            <TextInput label='Phone' name='phone' value={this.state.phone} onChange={this.onChange} />
          </div>
          <div id='create-patient__email' >
            <TextInput label='E-mail' name='email' value={this.state.email} onChange={this.onChange} />
          </div>
        </div>
        <div className='create-patient__row' >
          <div id='create-patient__primary-insurance' >
            <TextInput label='Primary Insurance' />
          </div>
          <div id='create-patient__phone' >
            <TextInput label='Phone' />
          </div>
        </div>
        <div className='create-patient__row' >
          <div id='create-patient__secondary-insurance' >
            <TextInput label='Secondary Insurance' />
          </div>
          <div id='create-patient__phone' >
            <TextInput label='Phone' />
          </div>
        </div>
        <div id='create-patient__button'>
          <Button text='Save New Patient' fill onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    patient: state.patient.patient
  }
}

export default connect(mapStateToProps, { createPatient })(CreatePatiet)

