import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/menu'
import './Header.css'

const Header = ({ leftIcon, text, rightIcon, toggleMenu }) => {
  return (
    <div className='header' >
      <span className='leftIcon'>{leftIcon}</span>
      <span id='searchText'>{text}</span>
      <span className='rightIcon' onClick={toggleMenu} >{rightIcon}</span>
    </div>
  );
};
//TODO: replace search text field with text input component
Header.propTypes = {
  leftIcon: PropTypes.element,
  text: PropTypes.string,
  rightIcon: PropTypes.element
};

export default connect(null, { toggleMenu })(Header)
