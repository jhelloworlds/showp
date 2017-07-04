import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toggle from '../common/inputs/toggle/Toggle'
import Select from '../common/inputs/select/Select.js'
import Button from '../common/button/Button'
import { extra } from '../utils/perDay'
import { submitFreq } from '../actions/wizard'
import './Freq.css'

class Freq extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {
        index: this.props.freq.index || 1,
        quantity: this.props.freq.quantity || 2
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: {
        index: nextProps.freq.selected.index,
        quantity: nextProps.freq.selected.quantity
      }
    })
  }
  onChange(index) {
    this.setState({
      selected: { index: index, quantity: parseInt(this.props.freq.read[index].title, 10) }
    })
  }
  onSelectChange(index, value) {
    this.setState({
      selected: { index: index, quantity: parseInt(value, 10) }
    })
  }
  onClick() {
    this.props.submitFreq(this.state.selected)
  }
  render() {
    const { product, freq } = this.props
    return (
      <div className='freq' >
        <div className='product__header' >
          <span className='product__header__title' >Order: Frequency of Use</span>
          <div className='product__header__subtitle' >Please choose a daily Frequency of use for the <span style={{ fontWeight: 'bold' }}>{product.name}</span>.</div>
        </div>
        <Toggle selected={this.state.selected.index} options={freq.read} onChange={this.onChange} />
        <div className='freq__calc' >
          <Select label='PER DAY' selected={this.state.selected.index} options={extra} onChange={this.onSelectChange} />
          <div className='freq__form-item form-item'>
            <span className='freq__ico' > x </span> 30 <span className='freq__ico' > = </span>
          </div>
          <div className='input-group' >
            <label> PER MONTH </label>
            <div className='freq__item form-item'>
              {this.state.selected.quantity * 30}
            </div>
          </div>
        </div>
        <div className='freq__button' ><Button text='Next' fill onClick={this.onClick} /></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.wizard.products.selected.item,
    freq: state.wizard.freq
  }
}

export default connect(mapStateToProps, { submitFreq })(Freq)