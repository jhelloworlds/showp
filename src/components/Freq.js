import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toggle from '../common/inputs/toggle/Toggle'
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
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: {
        index: nextProps.freq.index,
        quantity: nextProps.freq.quantity
      }
    })
  }
  onChange(index) {
    this.setState({
      selected: { index: index, quantity: parseInt(this.props.freq.read[index].title, 10) }
    })
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

export default connect(mapStateToProps)(Freq)