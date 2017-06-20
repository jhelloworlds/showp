import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import Select from '../common/inputs/select/Select.js'
import Button from '../common/button/Button'
import { submitLength } from '../actions/wizard'
import './Order.css'

const options = [30, 90, 180, 360, 1] // last option lifetime

class Order extends Component {
  constructor() {
    super()
    this.state = {
      startDate: moment().format(),
      lengthOption: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.handlePick = this.handlePick.bind(this)
  }
  handleChange(date) {
    this.setState({
      startDate: date
    })
  }
  handlePick(index) {
    this.setState({
      lengthOption: index
    })
  }
  onClick() {
    this.props.submitLength(moment(this.state.startDate).format(), moment(this.state.startDate).add(options[this.state.lengthOption], 'days').format())
  }
  render() {
    const { product } = this.props
    return (
      <div className='length' >
        <div className='product__header' >
          <span className='product__header__title' >Order: Length of Need</span>
          <div className='product__header__subtitle' >Please provide length of need, refills, and start date for the <span style={{ fontWeight: 'bold' }}>{product.name}</span>.</div>
        </div>
        <div className='length__form' >
          <div className="input-group">
            <label>ORDER START DATE</label>
            <DatePicker
              selected={this.state.startDate ? moment(this.state.startDate) : ''}
              onChange={this.handleChange}
              className='form-item full-width'
              id='length__start'
              dateFormat='MMMM-DD, YYYY'
              popoverAttachment='top right'
              popoverTargetAttachment='bottom right'
            />
            <div id='length__need' >
              <Select label='LENGTH OF NEED' onChange={this.handlePick} selected={this.state.lengthOption} options={['1 Month', '3 Months', '6 Months', '1 Year', 'Lifetime']} />
            </div>
          </div>
          <div className='freq__button' ><Button text='Next' fill onClick={this.onClick} /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.wizard.products.selected.item
  }
}

export default connect(mapStateToProps, { submitLength })(Order)