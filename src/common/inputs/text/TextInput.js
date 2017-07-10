import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

class TextInput extends Component {
  render() {
    const { stl, type, label, value, placeholder, onChange, onKey, name, onFocus } = this.props
    return (
      <div className="input-group">
        {label ? <label>{label.toUpperCase()}</label> : null}
        <input onChange={onChange} value={value} type={type || "text"} name={name || type || "text"} className={stl || "form-item"} placeholder={placeholder} onKeyPress={onKey} onFocus={onFocus} />
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
  onFocus: PropTypes.func
}

export default TextInput