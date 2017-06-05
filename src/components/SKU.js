import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toggle from '../common/inputs/toggle/Toggle'
import { getSKU, submitSKU } from '../actions/wizard'
import './SKU.css'

class SKU extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {
        index: this.props.selected.index || 0,
        item: this.props.selected.item || {}
      }
    }
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    this.props.getSKU()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: {
        index: nextProps.selected.index,
        item: nextProps.selected.item
      }
    })
  }
  onChange(index) {
    this.props.submitSKU({
      index: index,
      item: this.props.SKU[index]
    })
  }
  render() {
    const { product, SKU } = this.props
    const SKUs = SKU.map((item) => {
      return { title: item.name, subtitle: '' }
    })
    return (
      <div className='SKU' >
        <div className='product__header' >
          <span className='product__header__title' >{product.name}</span>
          <div className='product__header__subtitle' >Please choose the precise product type to be given to the patient.</div>
        </div>
        <Toggle selected={this.state.selected.index} options={SKUs} onChange={this.onChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.wizard.products.selected.item,
    SKU: state.wizard.SKU.read,
    selected: state.wizard.SKU.selected
  }
}

export default connect(mapStateToProps, { getSKU, submitSKU })(SKU)
