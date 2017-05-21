import React, { Component } from 'react'
import Menu from '../components/Menu'
import { connect } from 'react-redux'
import { toggleMenu } from '../actions/menu'
import { userLogOut } from '../actions/auth'
import { PropTypes } from 'prop-types'

class Main extends Component {
  constructor(props){
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
    this.logOut = this.logOut.bind(this)
  }
  toggleMenu() {
    this.props.toggleMenu()
  }
  logOut() {
    this.props.userLogOut()
    this.context.router.push('/login')
  }
  render() {
    return (
      <div>
        <Menu active={this.props.menu.active} logOut={this.logOut} onClose={this.toggleMenu} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu
  }
}

Main.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { toggleMenu, userLogOut } )(Main);