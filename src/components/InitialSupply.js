import React, { Component } from 'react'
import Select from '../common/inputs/select/Select.js'
import Button from '../common/button/Button'
import ToggleAccept from '../common/inputs/toggleAccept/ToggleAccept'
import { connect } from 'react-redux'
import { submitInitialSupply, incrementStep } from '../actions/wizard'
import './InitialSupply.css'

const options = [
  '1 package', '2 packages', '3 packages', '4 packages', '5 packages'
]

class InitialSupply extends Component {
  constructor() {
    super()
    this.state = {
      initialOption: 0,
      accepted: false
    }
    this.handlePick = this.handlePick.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }
  handlePick(index) {
    this.setState({
      initialOption: index
    })
  }
  onClick() {
    this.accepted ? this.props.submitInitialSupply('' + (this.state.initialOption + 1)) : this.props.incrementStep()
  }
  onToggle(item) {
    item.id === 1 ? this.setState({ accepted: true }) : this.setState({ accepted: false })
  }
  render() {
    return (
      <div className='length' >
        <div className='product__header' >
          <span className='product__header__title' >Order: Initial Supply</span>
          <div className='product__header__subtitle' >Please verify SKU and initial supply provided to patient.</div>
        </div>
        <div className='length__form initial-supply__form' >
          <ToggleAccept
            data={[
              {
                description: 'I have not provided patient with an initial supply of the caude catheter',
                id: 0,
                highlight: 'I have not'
              },
              {
                description: 'I have provided patient with an initial supply of the caude catheter',
                id: 1,
                highlight: 'I have'
              }
            ]}
            onChange={this.onToggle}
          />
          {this.state.accepted ? <div className="input-group">
            <div id='length__need' >
              <Select onChange={this.handlePick} selected={this.state.initialOption} options={options} />
            </div>
          </div> : null}
          <div className='freq__button' ><Button text='Next' fill onClick={this.onClick} /></div>
        </div>
      </div>
    )
  }
}

export default connect(null, { submitInitialSupply, incrementStep })(InitialSupply)
