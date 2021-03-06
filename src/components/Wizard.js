import React, { Component } from 'react'
import CreatePatient from './CreatePatient'
import Diagnosis from './Diagnosis'
import Justifications from './Justifications'
import Product from './Product'
import SKU from './SKU'
import Freq from './Freq'
import Order from './Order'
import InitialSupply from './InitialSupply'
import Dconf from './Dconf'
import Pconf from './Pconf'
import Final from './Final'
import PrescriptionConfirmation from './PrescriptionConfirmation'
import { connect } from 'react-redux'
import './Wizard.css'

class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: this.props.step
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ step: nextProps.step })
  }
  render() {
    const content = (() => {
      switch (this.state.step) {
        case 1:
          return <Diagnosis />
        case 2:
          return <Justifications />
        case 3:
          return <Product />
        case 4:
          return <SKU />
        case 5:
          return <Freq />
        case 6:
          return <Order />
        case 7:
          return <InitialSupply />
        case 8:
          return <Dconf />
        case 9:
          return <Pconf />
        case 10:
          return <PrescriptionConfirmation />
        case 11: 
          return <Final />
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