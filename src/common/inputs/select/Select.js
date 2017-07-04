import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FaSort from 'react-icons/lib/fa/sort'
import './Select.css'

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      selected: false,
      selectedIndex: this.props.selected || 0,
      active: false
    }
    this.onClick = this.onClick.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  onClick(e) {
    this.setState({ selectedIndex: e.target.value, active: false, value: e.target.textContent })
    this.props.onChange && this.props.onChange(e.target.value, this.props.options[e.target.value])
  }
  toggle() {
    this.setState({ active: !this.state.active })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedIndex: nextProps.selected,
      value: this.props.options[nextProps.selected]
    })
  }
  render() {
    const { label, options } = this.props
    const list = options.map((option, i) => {
      return <li value={'' + i} onClick={this.onClick} key={option + i}
        className={this.state.selectedIndex === i ? 'list-item selected' : 'list-item'} >{option}
      </li>
    })
    return (
      <div className='input-group' >
        <label>{label && label.toUpperCase()}</label>
        <div className='form-item' id='small-form-item' onClick={this.toggle}>
          <span className='select__value'> {this.state.value || this.props.options[this.props.selected] || options[0]} </span> <span id='sort-icon' ><FaSort /></span>
        </div>
        <div className={this.state.active ? 'dropdown active' : 'dropdown inactive'}>
          <ul>
            {list}
          </ul>
          <div className='trigger' onClick={this.toggle} ></div>
        </div>
      </div>
    );
  }
}

TextInput.defaultProps = {
  options: ['Option 1', 'Option 2', 'Option 3']
}

TextInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  selected: PropTypes.number
};

export default TextInput;
