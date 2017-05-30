import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/menu'
import TextInput from '../inputs/text/TextInput'
import service from '../../utils/service'
import { browserHistory } from 'react-router'
import { setQuery } from '../../actions/patient'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doctor: {},
      search: this.props.query
    }
    this.onChange = this.onChange.bind(this)
    this.onKey = this.onKey.bind(this)
  }
  onKey(e) {
    if (e.charCode === 13) {
      service.get('/office/patient/search' + this.state.search + '&token=' + this.props.doctor.token)
      this.props.setQuery(this.state.search)
      browserHistory.push('/list')
    }
  }
  onChange(e) {
    this.setState({ search: e.target.value })
  }
  render() {
    const { leftIcon, text, rightIcon, toggleMenu } = this.props
    return (
      <div className='header' >
        <span className='leftIcon'>{leftIcon}</span>
        <TextInput placeholder={text} stl='reverse header__search' type='search' value={this.state.search} onKey={this.onKey} onChange={this.onChange} />
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
    doctor: state.user,
    query: state.patient.query
  }
}

export default connect(mapStateToProps, { toggleMenu, setQuery })(Header)




