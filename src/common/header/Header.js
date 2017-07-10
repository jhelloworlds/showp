import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/menu'
import TextInput from '../inputs/text/TextInput'
import { searchPatient } from '../../actions/patient'
import FaAngle from 'react-icons/lib/fa/angle-left'
import { decrementStep } from '../../actions/wizard'
import { browserHistory } from 'react-router'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onKey = this.onKey.bind(this)
    this.isWizard = this.isWizard.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }
  onKey(e) {
    if (e.charCode === 13) {
      this.props.searchPatient(this.state.search)
    }
  }
  onChange(e) {
    this.setState({ search: e.target.value })
  }
  isWizard() {
    return !!this.props.patient.last_name && this.props.step > 0
  }
  onClick() {
    this.props.decrementStep()
  }
  onFocus() { 
    location.pathname === '/form' && browserHistory.push('/')
  }
  componentDidMount() {
    location.pathname === '/' && ReactDOM.findDOMNode(this.searchInput).childNodes[0].focus()
  }
  componentDidUpdate() {
    location.pathname === '/' && ReactDOM.findDOMNode(this.searchInput).childNodes[0].focus()
  }
  render() {
    const { leftIcon, text, rightIcon, toggleMenu } = this.props
    return (
      <div className='header' >
        <span className={this.isWizard() ? 'leftAngle' : 'leftIcon'} onClick={this.isWizard() ? this.onClick : null} >{this.isWizard() ? <FaAngle /> : leftIcon} </span>
        {
          this.isWizard() ?
            <span id='header__last-name' > {this.props.patient.last_name} </span>
            :
            <TextInput ref={(input) => { this.searchInput = input }} placeholder={text} stl='reverse header__search' type='search' value={this.state.search} onKey={this.onKey} onChange={this.onChange} onFocus={this.onFocus} />
        }
        <span className='rightIcon' onClick={toggleMenu} >{rightIcon}</span>
      </div>
    );
  }
}

Header.propTypes = {
  leftIcon: PropTypes.element,
  text: PropTypes.string,
  rightIcon: PropTypes.element
}
const mapStateToProps = (state) => {
  return {
    patient: state.patient.patient,
    step: state.wizard.step
  }
}

export default connect(mapStateToProps, { toggleMenu, searchPatient, decrementStep })(Header)




