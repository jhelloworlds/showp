import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getJustifications, submitJustifications } from '../actions/wizard'
import Button from '../common/button/Button'
import './Justifications.css'

class Justifications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      justifications: {
        read: this.props.justifications.read || [],
        active: this.props.justifications.active || []
      }
    }
  }
  componentDidMount() {
    this.props.getJustifications()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      justifications: {
        read: nextProps.justifications.read,
        active: nextProps.justifications.active
      }
    })
    this.isSelected = this.isSelected.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onButton = this.onButton.bind(this)
  }
  isSelected(id) {
    for (let i = 0; i < this.state.justifications.active.length; i++) {
      if (this.state.justifications.active[i] === id) return true
    }
    return false
  }
  onClick(id, selected) {
    if (selected) {
      let index
      for (let i = 0; i < this.state.justifications.active.length; i++) {
        if (this.state.justifications.active[i] === id) index = i; break
      }
      const arr = [...this.state.justifications.active]
      arr.splice(index, 1)
      const just = Object.assign({}, this.state.justifications, { active: arr })
      this.setState({
        justifications: just
      })
    } else {
      const active = this.state.justifications.active.concat(id)
      const just = Object.assign({}, this.state.justifications, { active: active })
      this.setState({
        justifications: just
      })
    }
  }
  onButton(){
    this.props.submitJustifications(this.state.justifications.active)
  }
  render() {
    const justs = this.state.justifications.read.map((just) => {
      let selected = this.isSelected(just.id)
      return <div key={just.id} className='justifications__list__item' onClick={() => this.onClick(just.id, selected)} >
        <div className='justifications__list__left'  >
          {selected ?
            <div className='arrow' >
              <div className='arrow-body'>confirmed</div><div className='arrow-border'></div>
            </div>
            : null}
        </div>
        <div className='justifications__list__content'  >
          {just.description}
        </div>
        <div className={selected ? 'justifications__list__right active' : 'justifications__list__right'} >
        </div>
      </div>
    })
    return (
      <div className='justifications' >
        <div className='justifications__header' >
          <span className='justifications__header__title' >Medical Necessities</span>
          <div className='justifications__header__subtitle' >Please <span className='underline' >tap all that apply</span> and are clinically documented. </div>
        </div>
        <div className='justifications__list' >
          {justs}
        </div>
        <div id='justifications__button' >
          <Button text='Next' fill onClick={this.onButton} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    justifications: state.wizard.justifications
  }
}

export default connect(mapStateToProps, { getJustifications, submitJustifications })(Justifications)