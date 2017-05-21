import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

const TextInput = ({ stl, type, label, value, placeholder, onChange, onKey }) => {
  return <div className="input-group">
    { label ? <label>{label.toUpperCase()}</label> : null }
    <input onChange={onChange} value={value} type={type || "text"} name={type || "text"} className={stl || "form-item"} placeholder={placeholder} onKeyPress={onKey} />
  </div>
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  onChange: PropTypes.func,
  onKey: PropTypes.func
};

export default TextInput;
