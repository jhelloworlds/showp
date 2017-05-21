import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({ text, fill, icon, onClick }) => {
  return (
    <button className={fill ? 'button fill' : 'button noFill'} onClick={onClick} >
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
  onClick: PropTypes.func
};

export default Button;
