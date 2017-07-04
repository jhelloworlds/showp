import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

class TextInput extends Component {
  render() {
    const { stl, type, label, value, placeholder, onChange, onKey, name } = this.props
    return (
      <div className="input-group">
        {label ? <label>{label.toUpperCase()}</label> : null}
        <input onChange={onChange} value={value} type={type || "text"} name={name || type || "text"} className={stl || "form-item"} placeholder={placeholder} onKeyPress={onKey} />
      </div>
    )
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  stl: PropTypes.string,
  onChange: PropTypes.func,
  onKey: PropTypes.func,
  name: PropTypes.string,
}

export default TextInput