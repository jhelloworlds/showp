import React, { Component } from 'react'
import TextInput from '../common/inputs/text/TextInput'
import Button from '../common/button/Button'
import Select from '../common/inputs/select/Select.js'
import './CreatePatient.css'

class CreatePatiet extends Component {
  render() {
    return (
      <div className='create-patient' >
        <div className='create-patient__row' >
          <div id='create-patient__first-name' >
            <TextInput label='First Name' />
          </div>
          <div id='create-patient__last-name' >
            <TextInput label='Last Name' />
          </div>
          <div id='create-patient__middle-name' >
            <TextInput label='Middle Name' />
          </div>
          <div id='create-patient__dob' >
            <TextInput label='Date of Birth' />
            {/* TODO: add datepicker */}
          </div>
        </div>
        <div className='create-patient__row' >
          <div id='create-patient__street-address' >
            <TextInput label='Street Address' />
          </div>
          <div id='create-patient__city' >
            <TextInput label='City' />
          </div>
          <div id='create-patient__state' >
            <Select label='state' options={['CA', 'PA']} />
          </div>
          <div id='create-patient__zip-code' >
            <TextInput label='Zip Code' />
          </div>
        </div>
        <div className='create-patient__row' >
          <div id='create-patient__gender' >
            <Select label='gender' options={['MALE', 'FEMALE']} />
          </div>
          <div id='create-patient__phone' >
            <TextInput label='Phone' />
          </div>
          <div id='create-patient__email' >
            <TextInput label='E-mail' />
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
          <Button text='Save New Patient' fill />
        </div>
      </div>
    );
  }
}

export default CreatePatiet
