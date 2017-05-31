import React, { Component } from 'react'
import TextInput from '../common/inputs/text/TextInput'
import Button from '../common/button/Button'
import FaLock from 'react-icons/lib/fa/lock'
import { connect } from 'react-redux'
import { userLoginRequest } from '../actions/auth'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onKey = this.onKey.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onKey(e) {
    if (e.charCode === 13) this.onSubmit(e)
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.userLoginRequest(this.state)
  }
  render() {
    return (
      <div className='login' >
        <div className='login__title' > Physician Sing In </div>
        <div className='login__box'>
          <TextInput stl='reverse' type='email' placeholder='Email' value={this.state.email} onChange={this.onChange} onKey={this.onKey} />
          <TextInput stl='reverse' type='password' placeholder='Password' value={this.state.password} onChange={this.onChange} onKey={this.onKey} />
          <Button text='SIGN IN' onClick={this.onSubmit} onKey={this.onKey} />
          <div id='login__bottom-text-box'>
            <div className='login__bottom-text-box-text' ><FaLock id='lock-icon' /> HIPAA Compliant </div>
            <div className='login__bottom-text-box-text' id='login__forgot' > Forgot Password? </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { userLoginRequest })(Login);

