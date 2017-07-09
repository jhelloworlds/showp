import React, { Component } from 'react'
import Button from '../common/button/Button'
import SignaturePad from 'react-signature-pad'
import './Dconf.css'

const STUFF = [
  { description: 'i have fit the item for the patient', id: 'dsa5435a' },
  { description: 'i have provided information', id: 'd65as4sa54d6' },
  { description: 'you maydo something', id: 'as5d45sd' },
  { description: 'if you have any questions go bother someone else', id: 'asdasd64das' }
]

class Dconf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedList: [],
      stuff: STUFF
    }
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

  render() {
    const { stuff, selectedList } = this.state
    let firstOccurance = true // only show arrow if it's first occurance

    let content = stuff.map((item, index) => {
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

    return (
      <div className='justifications' >
        <div className='justifications__header' >
          <span className='justifications__header__title' >Medical Necessities</span>
          <div className='justifications__header__subtitle' >Please tap to confirm patient eduction</div>
        </div>
        <div className='justifications__list' >
          {content}
        </div>
        <div className='pad' >
          <SignaturePad clearButton="true"/>
        </div>
        <div id='justifications__button' className={stuff.length !== selectedList.length && 'disabled'} >
          <Button text='Confirm Signature' fill onClick={this.onButton} />
        </div>
      </div>
    )
  }
}

export default Dconf
