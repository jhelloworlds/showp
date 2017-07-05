import React, { Component } from 'react'
import Header from './common/header/Header'
import FaBars from 'react-icons/lib/fa/bars'
import FaSearch from 'react-icons/lib/fa/search'
import Menu from './components/Menu'
import Loading from './components/Loading'
import { connect } from 'react-redux'
import { toggleMenu } from './actions/menu'
import { userLogOut } from './actions/auth'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.logOut = this.logOut.bind(this)
  }
  toggleMenu() {
    this.props.toggleMenu()
  }
  logOut() {
    this.props.userLogOut(this.props.doctor.token)
  }

  render() {
    return (
      <div id='app'>
        <Header text="Patient's Name" leftIcon={<FaSearch />} rightIcon={<FaBars />} />
        {/*<div className='container'>*/}
        <Menu active={this.props.menu.active} logOut={this.logOut} onClose={this.toggleMenu} />
        {this.props.children}
        {this.props.loading.isloading ? <Loading /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    doctor: state.user,
    loading: state.loading
  }
}
export default connect(mapStateToProps, { toggleMenu, userLogOut })(App)
