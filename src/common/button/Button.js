import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({ text, fill, icon, onClick }) => {
  return (
    <div className={fill ? 'button fill' : 'button noFill'}>
      <span className={icon ? 'icon' : 'hidden'} >+</span>
      <span className='text'>{text}</span>
      <span className={icon ? 'icon' : 'hidden'}></span>
    </div>
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
