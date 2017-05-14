import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

const TextInput = ({ label, placeholder }) => {
  return <div className="input-group">
    <label>{label.toUpperCase()}</label>
    <input type="text" name="text" className="form-item" placeholder={placeholder} />
  </div>
};

TextInput.defaultProps = {
  label: 'PATIENT NAME',
  placeholder: 'Erik Kevin Smith'
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default TextInput;
