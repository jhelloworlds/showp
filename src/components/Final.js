import React, { Component } from 'react'
import Button from '../common/button/Button'
import { browserHistory } from 'react-router'
import { userLogOut } from '../actions/auth'
import { connect } from 'react-redux'
import './Final.css'

class Final extends Component {
  onClick = () => {
    browserHistory.push('/')
  }
  onLogOut = () => {
    this.props.userLogOut()
  }
  render() {
    return (
      <div className='final' >
        <div className='final__icon' ></div>
        <div className='final__h1' >Order Confirmed</div>
        <div className='final__description' >Ready to see your next patient? Please click below.</div>
        <Button text='New Patient' fill onClick={this.onClick} />
        <Button text='Sign Out' fill={false} onClick={this.onLogOut} />
      </div>
    )
  }
}

export default connect(null, { userLogOut })(Final)
