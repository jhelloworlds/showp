import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ leftIcon, text, rightIcon }) => {
  return (
    <div className='header' >
      <span className='leftIcon'>{leftIcon}</span>
      <span id='searchText'>{text}</span>
      <span className='rightIcon'>{rightIcon}</span>
    </div>
  );
};

Header.propTypes = {
  leftIcon: PropTypes.element,
  text: PropTypes.string,
  rightIcon: PropTypes.element
};

export default Header
