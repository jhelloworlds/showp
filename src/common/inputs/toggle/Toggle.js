import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Toggle.css'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 1
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick(i){
    console.log(i)
    this.setState({ selected: i })
  }

  render() {
    const { options } = this.props
    const boxes = options.map((box, i) => {
      return <div key={'box' + i} onClick={() => this.onClick(i+1)} className={i + 1 === this.state.selected ? 'toggle-box chosen' : 'toggle-box'} >
        <div className='title-holder'>
          <div className='title-holder__text'>{box.title}</div>
          {box.subtitle && <div className='title-holder__text'>{box.subtitle}</div>}
        </div>
      </div>
    })
    return <div className='toggle-boxes'>
      {boxes}
    </div>
  }
}

Toggle.defaultProps = {
  options: [{
    title: 'Selected Option Title',
    subtitle: ''
  },
  {
    title: 'Selected Option Title',
    subtitle: ''
  }],
  selected: 0
}

Toggle.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  })),
  selected: PropTypes.number.isRequired
};

export default Toggle;