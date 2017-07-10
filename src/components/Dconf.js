import React, { Component } from 'react'
import Button from '../common/button/Button'
import SignaturePad from 'react-signature-pad'
import { connect } from 'react-redux'
import { getConfs, submitConfs } from '../actions/wizard'
import moment from 'moment'
import './Dconf.css'

class Dconf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedList: [],
      confs: [],
      signatureText: 'Draw Signature',
      signature: ''
    }
    this.onButton = this.onButton.bind(this)
  }

  isSelected = (id) => {
    if (this.state.selectedList.indexOf(id) === -1) {
      return false
    } else {
      return true
    }
  }

  onClick = (id) => {
    var selectedList = this.state.selectedList.slice()

    if (this.isSelected(id)) {
      selectedList.splice(selectedList.indexOf(id), 1)
    } else {
      selectedList.push(id)
    }

    this.setState({ selectedList: selectedList })
  }

  handleSignatureClick = () => {
    this.setState({ signatureText: '' })
  }
  onButton() {
    const pad = this.pad
    const signature = pad.toDataURL()
    this.props.submitConfs('doctor', signature)
  }
  componentDidMount() {
    this.props.getConfs('doctor')
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      confs: nextProps.confs
    })
  }
  render() {
    const { confs, selectedList } = this.state
    let firstOccurance = true // only show arrow if it's first occurance

    let content = confs.map((item, index) => {
      let showDiv = false

      if (!this.isSelected(item.id) && firstOccurance) {
        showDiv = true
        firstOccurance = false
      }
      return (
        <div key={item.id} className="justifications__list__item" onClick={() => this.onClick(item.id)}>
          <div className="justifications__list__left">
            {showDiv &&
              <div className='arrow' >
                <div className='arrow-body'>Tap to Confirm</div><div className='arrow-border'></div>
              </div>
            }
          </div>
          <div className="justifications__list__content">
            {item.description}
          </div>
          <div className={this.isSelected(item.id) ?
            'justifications__list__right active' : 'justifications__list__right'
          } ></div>
        </div>
      )
    })

    if (confs.length < 1) {
       return <div></div>
     }
    return (
      <div className='justifications' >
        <div className='justifications__header' >
          <span className='justifications__header__title' >Medical Necessities</span>
          <div className='justifications__header__subtitle' >Please tap to confirm patient eduction</div>
        </div>
        <div className='justifications__list' >
          {content}
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
            <div>Name <span className='bold' >{this.props.user.first_name}</span></div>
            <div>Date <span className='bold' >{moment().format('MMMM DD, YYYY')}</span></div>
          </div>
          <div className='pad__right' ></div>
        </div>
        <div className='pad__sub'>
          <div className='pad__left' ></div>
          <div className='pad__center' >
            <Button text='Confirm Signature' fill onClick={this.onButton} disabled={!!this.state.signatureText || !(confs.length === selectedList.length)} />
          </div>
          <div className='pad__right' ></div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    confs: [...state.wizard.confsD.verbal, ...state.wizard.confsD.confirm],
    user: state.user
  }
}

export default connect(mapStateToProps, { getConfs, submitConfs })(Dconf)

