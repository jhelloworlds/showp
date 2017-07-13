import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts, submitProducts } from '../actions/wizard'
import Toggle from '../common/inputs/toggle/Toggle'
import './Product.css'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {
        index: this.props.selected.index || 0,
        item: this.props.selected.item || {}
      },
      loading: this.props.loading || true
    }
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    this.props.getProducts()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: {
        index: nextProps.selected.index,
        item: nextProps.selected.item
      },
      loading: nextProps.loading
    })
  }
  onChange(index) {
    this.props.submitProducts({
        index: index,
        item: this.props.products[index]
    })
  }
  render() {
    const { patient, diagnosis, products } = this.props
    const name = patient.first_name
    let diag
    diagnosis.options.primary.forEach((one) => {
      if (one.id === diagnosis.selected.primary) diag = one.code
    })
    const prods = products.map((prod) => {
      return { title: prod.name, subtitle: prod.code, disabled: !prod.justified }
    })
    if (this.state.loading) return <div> </div>
    return (
      <div className='product' >
        <div className='product__header' >
          <span className='product__header__title' >Choose a Product</span>
          <div className='product__header__subtitle' >Please choose a product for {name}'s {diag} diagnosis.</div>
        </div>
        <Toggle selected={this.state.selected.index} options={prods} onChange={this.onChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patient: state.patient.patient,
    diagnosis: state.wizard.diagnosis,
    products: state.wizard.products.read,
    selected: state.wizard.products.selected,
    loading: state.loading.isloading
  }
}

export default connect(mapStateToProps, { getProducts, submitProducts })(Product)