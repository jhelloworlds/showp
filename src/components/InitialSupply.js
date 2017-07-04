import React, { Component } from 'react'
import Select from '../common/inputs/select/Select.js'
import Button from '../common/button/Button'
import { connect } from 'react-redux'
import { submitInitialSupply } from '../actions/wizard'

const options = [
  '1 package', '2 packages', '3 packages', '4 packages', '5 packages'
]

class InitialSupply extends Component {
  constructor(){
    super()
    this.state = {
      initialOption: 0
    }
    this.handlePick = this.handlePick.bind(this)
    this.onClick = this.onClick.bind(this)
  }
   handlePick(index) {
    this.setState({
      initialOption: index
    })
  }
  onClick() {
    this.props.submitInitialSupply(''+ (this.state.initialOption + 1))
  }
  render() {
    return (
      <div className='length' >
        <div className='product__header' >
          <span className='product__header__title' >Order: Initial Supply</span>
          <div className='product__header__subtitle' >Please verify SKU and initial supply provided to patient.</div>
        </div>
        <div className='length__form' >
          <div className="input-group">
            <div id='length__need' >
              <Select onChange={this.handlePick} selected={this.state.initialOption} options={options} />
            </div>
          </div>
          <div className='freq__button' ><Button text='Next' fill onClick={this.onClick} /></div>
        </div>
      </div>
    )
  }
}

export default connect(null, { submitInitialSupply })(InitialSupply)
 