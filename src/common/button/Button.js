import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({ text, fill, icon, onClick, disabled }) => {
  return (
    <button className={disabled ? 'disabled-button' : fill ? 'button fill' : 'button noFill'} onClick={onClick} disabled={disabled} >
      <span className={icon ? 'icon' : 'hidden'} >+</span>
      <span className='text'>{text}</span>
      <span className={icon ? 'icon' : 'hidden'}></span>
    </button>
  );
};

Button.defaultProps = {
  fill: true,
  text: 'Submit'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fill: PropTypes.bool.isRequired,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
