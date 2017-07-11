import React, { Component } from 'react'
import Toggle from '../common/inputs/toggle/Toggle'
import Button from '../common/button/Button'
import { connect } from 'react-redux'
import { getDiagnosisOptions, getPrescription } from '../actions/wizard'
import './Diagnosis.css'

class Diagnosis extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diagnosisOptions: this.props.diagnosisOptions || {primary: [], secondary: []},
      diagnosisSelected: {
        primary: this.props.diagnosisSelected.primary || '',
        secondary: this.props.diagnosisSelected.secondary || ''
      },
      loading: this.props.loading || true
    }
    this.onClick = this.onClick.bind(this)
    this.onChangePrimary = this.onChangePrimary.bind(this)
    this.onChangeSecondary  = this.onChangeSecondary.bind(this)
    this.selectedNum = this.selectedNum.bind(this)
  }
  componentDidMount() {
    this.props.getDiagnosisOptions()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      diagnosisOptions: nextProps.diagnosisOptions,
      diagnosisSelected: {
        primary: nextProps.diagnosisSelected.primary || nextProps.diagnosisOptions.primary[0].id,
        secondary: nextProps.diagnosisSelected.secondary || nextProps.diagnosisOptions.secondary[0].id
      },
      loading: nextProps.loading
    })
  }
  onChangePrimary(index) {
    const selected = Object.assign({}, this.state.diagnosisSelected, { primary: this.state.diagnosisOptions.primary[index].id })
    this.setState({ diagnosisSelected: selected })
  }
  onChangeSecondary(index) {
    const selected = Object.assign({}, this.state.diagnosisSelected, { secondary: this.state.diagnosisOptions.secondary[index].id })
    this.setState({ diagnosisSelected: selected })
  }
  onClick() {
    this.props.getPrescription(this.state.diagnosisSelected)
  }
  selectedNum() {
    let primaryNum=0
    let secondaryNum=0
    for (let i=0; i < this.state.diagnosisOptions.primary.length; i++) {
      if(this.state.diagnosisOptions.primary[i].id === this.state.diagnosisSelected.primary) {
        primaryNum = i
      }
    }
    for (let i=0; i < this.state.diagnosisOptions.secondary.length; i++) {
      if(this.state.diagnosisOptions.secondary[i].id === this.state.diagnosisSelected.secondary) {
        secondaryNum = i
      }
    }
    return { primary: primaryNum, secondary: secondaryNum }
  }
  render() {
    const primary = !!this.state.diagnosisOptions.primary ? this.state.diagnosisOptions.primary.map((option) => {
      return { title: option.name, subtitle: option.code }
    }) : []
    const secondary = !!this.state.diagnosisOptions.secondary ? this.state.diagnosisOptions.secondary.map((option) => {
      return { title: option.name, subtitle: option.code }
    }) : []
    if (this.state.loading) return <div> </div>
    return (
      <div className='diagnosis' >
        <div id='diagnosis__title-first' className='diagnosis__title'  >
          <span className='diagnosis__title__header'> Primary ICD-10 Diagnosis </span>
          <span className='diagnosis__title__subtitle'> Please Choose all diagnosis that apply. </span>
        </div>
        <div className='diagnosis__toggle' >
          <Toggle selected={this.selectedNum().primary} options={primary} onChange={this.onChangePrimary} />
        </div>
        <div className='diagnosis__title'  >
          <span className='diagnosis__title__header'> Secondary ICD-10 Diagnosis </span>
          <span className='diagnosis__title__subtitle'> Please Choose all diagnosis that apply. </span>
        </div>
        <div className='diagnosis__toggle' >
          <Toggle selected={this.selectedNum().secondary} options={secondary} onChange={this.onChangeSecondary} />
        </div>
        <div id='diagnosis__button' >
          <Button text='Next' fill onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diagnosisOptions: state.wizard.diagnosis.options,
    diagnosisSelected: state.wizard.diagnosis.selected,
    loading: state.loading.isloading
  }
}

export default connect(mapStateToProps, { getDiagnosisOptions, getPrescription })(Diagnosis)
