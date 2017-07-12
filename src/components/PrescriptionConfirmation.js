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
              <div><span className="txt__light">Group Practice</span> <span className='txt__dark' >{this.props.user.org.name}</span></div>
              <div><span className="txt__light">Group DMEPOS</span></div>
              <div><span className="txt__light">Group NPI</span></div>
              <div><span className="txt__light">Physician</span> <span className='txt__dark' >{this.props.user.first_name} {this.props.user.last_name}</span></div>
              <div><span className="txt__light">Physician NPI</span></div>
            </div>

            <div className='right'>
              <div><span className="txt__light">Patient</span> <span className='txt__dark' >{this.props.patient.first_name} {this.props.patient.last_name}</span> </div>
              <div><span className="txt__light">DOB</span> <span className='txt__dark' >{this.props.patient.dob}</span></div>
              <div><span className="txt__light">Gender</span> <span className='txt__dark' >{this.props.patient.gender}</span></div>
              <div><span className="txt__light">Address</span> <span className='txt__dark' >{this.props.patient.address_street} {this.props.patient.address_apt} {this.props.patient.address_city} {this.props.patient.address_state} {this.props.patient.address_country} {this.props.patient.address_zip}</span></div>
              <div><span className="txt__light">Insurance</span> <span className='txt__dark' >{this.props.patient.address}</span></div>
            </div>
          </div>
        </div>
        <div className='product__diagnoses' >
          <div className='bold header__sm'>Product & Diagnoses</div>
          <div className='product'>
            <div><span className="txt__light">Product</span> <span className='txt__dark' >{this.props.product.name}</span></div>
            <div><span className="txt__light">Diagnosis</span> <span className='txt__dark' >{this.props.diagnosis.primary}</span> <br /> <span className='bold' >{this.props.diagnosis.secondary}</span></div>
            <div><span className="txt__light">Frequency</span> <span className='txt__dark' >{this.props.frequency} Per Day</span></div>
            <div><span className="txt__light">Length</span> <span className='txt__dark' >{duration} </span></div>
            <div><span className="txt__light">Start Date</span> <span className='txt__dark' >{this.props.length.start}</span></div>
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
            <div>Name <span className='bold' >{this.props.user.first_name} {this.props.user.last_name}</span></div>
            <div>Date <span className='bold' >{moment().format('MMMM DD, YYYY')}</span></div>
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

