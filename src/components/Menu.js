import React from 'react'
import FaList from 'react-icons/lib/fa/list-ol'
import FaUser from 'react-icons/lib/fa/user'
import FaLife from 'react-icons/lib/fa/life-bouy'
import Button from '../common/button/Button'
import './Menu.css'

const Menu = ({ active=true, onClose, logOut }) => {
  return (
    <div className={ active ? 'menu' : 'hide' } >
      <div id="mdiv" onClick={ () => onClose() }>
        <div className="mdiv" >
          <div className="md">
          </div>
        </div>
      </div>
      <div id='menu__icons-box'>
        <div className='menu__icons-box__box' >
          <span><FaList className='menu__icons-box__box__icon' /></span>
          <span className='menu__icons-box__box__text' >Patient <br />Evaluation</span>
        </div>
        <div className='menu__icons-box__box' id='menu__icons-box__box__middle' >
          <span><FaUser className='menu__icons-box__box__icon' /></span>
          <span className='menu__icons-box__box__text' >Manage <br />Patients</span>
        </div>
        <div className='menu__icons-box__box' >
          <span><FaLife className='menu__icons-box__box__icon' /></span>
          <span className='menu__icons-box__box__text' >Customer <br />Support</span>
        </div>
      </div>
      <div id='menu__signout-box'>
        <div id='menu__signout-box__org' >
          Health Center Of America
        </div>
        <div id='menu__signout-box__doc' >
          <span className='menu__signout-box__text' > Dr.Joseph R.Banks  </span>
          <span className='menu__signout-box__text' > jbanks@hcap.org </span>
          {/* TODO: Get Doctor Data either Decrypt token on Login or fetch from App.js */}
        </div>
      </div>
      <div id='menu__button' >
        <Button fill={false} text='Sign Out' onClick={logOut} />
      </div>
    </div>
  );
};

export default Menu;
