import React, { Component } from 'react'
import CreatePatient from './CreatePatient'
import { connect } from 'react-redux'
import './Wizard.css'

class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: this.props.step
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({ step: nextProps.step })
  }
  render() {
    const content = (() => {
      switch (this.state.step) {
        case 1:
          return <div>Hello</div>
          // return <Diagnosis />
        default:
          return <CreatePatient />
      }
    })()
    return (
      <div id='wizard' >
        {content}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    step: state.wizard.step
  }
}
export default connect(mapStateToProps)(Wizard)