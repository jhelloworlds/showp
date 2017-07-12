import React, { Component } from 'react'
import Button from '../common/button/Button'
import SignaturePad from 'react-signature-pad'
import { connect } from 'react-redux'
import moment from 'moment'
import './PrescriptionConfirmation.css'

class PrescriptionConfirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signatureText: 'Draw Signature',
      signature: ''
    }

    this.onButtonClick.bind(this);
  }

  handleSignatureClick = () => {
    this.setState({ signatureText: '' })
  }

  onButtonClick() {
    // TODO incremet step
  }

  render() {
    const days = this.props.length.end ?
      moment.duration(moment(this.props.length.end).diff(moment(this.props.length.start))).asDays() :
      ''
    const duration = (() => {
      switch (days) {
        case 30:
          return '1 Month'
        case 90:
          return '3 Months'
        case 180:
          return '6 Months'
        case 360:
          return '12 Months'
        default:
          return 'Lifetime'
      }
    })()
    return (
      <div className='justifications' >
        <div className='justifications__header' >
          <span className='justifications__header__title' >Prescription Confirmation</span>
          <div className='justifications__header__subtitle' >Please confirm the prescription below and sign</div>
        </div>
        <div className='visit__info' >
          <div className='bold header__sm'>Visit Information</div>
          <div className='info'>
            <div className='left'>
              <div className='left__title'>
                <div className='txt__light'>Group Practice</div>
                <div className='txt__light'>Group DMEPOS</div>
                <div className='txt__light'>Group NPI</div>
                <div className='txt__light'>Physician</div>
                <div className='txt__light'>Physician NPI</div>
              </div>
              <div className='left__value'>
                <div className='txt__dark'>{this.props.user.org.name}</div>
                <div className='txt__dark'>{this.props.user.org.dmepos}</div>
                <div className='txt__dark'>{this.props.user.org.npi}</div>
                <div className='txt__dark'>{this.props.user.first_name} {this.props.user.last_name}</div>
                <div className='txt__dark'></div>
              </div>
            </div>

            <div className='right'>
              <div className='left__title'>
                <div className='txt__light'>Patient</div>
                <div className='txt__light'>DOB</div>
                <div className='txt__light'>Gender</div>
                <div className='txt__light'>Address</div>
                <div className='txt__light'>Insurance</div>
              </div>
              <div className='left__value'>
                <div className='txt__dark'>{this.props.patient.first_name} {this.props.patient.last_name}</div>
                <div className='txt__dark'>{moment(this.props.patient.dob).format('DD-MM-YYYY')}</div>
                <div className='txt__dark'>{this.props.patient.gender}</div>
                <div className='txt__dark'>{this.props.patient.address_street} {this.props.patient.address_apt} {this.props.patient.address_city} {this.props.patient.address_state} {this.props.patient.address_country} {this.props.patient.address_zip}</div>
                <div className='txt__dark'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='product-diagnoses__container' >
          <div className='bold header__sm'>Product & Diagnoses</div>
          <div className='product-diagnoses'>
            <div className='left__title'>
              <div className='txt__light'>Product</div>
              <div className='txt__light'>Diagnosis</div>
              <div className='txt__light'>Frequency</div>
              <div className='txt__light'>Length</div>
              <div className='txt__light'>Start Date</div>
            </div>
            <div className='left__value'>
              <div className='txt__dark'>{this.props.product.name}</div>
              <div className='txt__dark'>{this.props.diagnosis.primary}<br />{this.props.diagnosis.secondary}</div>
              <div className='txt__dark'>{this.props.frequency} Per Day</div>
              <div className='txt__dark'>{duration}</div>
              <div className='txt__dark'>{this.props.length.start}</div>
            </div>
          </div>
        </div>
        <div className='pad' onMouseDown={this.handleSignatureClick} onTouchStart={this.handleSignatureClick} >
          <div className='pad__left' ></div>
          <div className='pad__center' >
            <SignaturePad ref={(pad) => this.pad = pad} />
            <span>{this.state.signatureText}</span>
          </div>
          <div className='pad__right' ></div>
        </div>
        <div className='pad__sub'>
          <div className='pad__left' ></div>
          <div className='pad__center' >
            <div className='signature-pad__info'><div className='singature-pad__info__left'>Name</div> <div className='bold singature-pad__info__right' >{this.props.user.first_name} {this.props.user.last_name}</div></div>
            <div className='signature-pad__info'><div className='singature-pad__info__left'>Date</div> <div className='bold singature-pad__info__right' >{moment().format('MMMM DD, YYYY')}</div></div>
          </div>
          <div className='pad__right' ></div>
        </div>
        <div className='pad__sub'>
          <div className='pad__left' ></div>
          <div className='pad__center' >
            <Button text='Confirm Prescription' onClick={this.onButtonClick} fill disabled={!!this.state.signatureText} />
          </div>
          <div className='pad__right' ></div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    patient: state.patient.patient,
    product: state.wizard.products.selected,
    diagnosis: state.wizard.diagnosis.selected,
    frequency: state.wizard.freq.selected.quantity,
    length: state.wizard.length,
  }
}

export default connect(mapStateToProps)(PrescriptionConfirmation)

