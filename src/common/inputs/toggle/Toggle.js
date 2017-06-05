import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Toggle.css'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected || 0
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick(i) {
    this.setState({ selected: i })
  }

  render() {
    const { options, onChange } = this.props
    const boxes = options.map((box, i) => {
      if (box.justified === undefined || box.justified === true) {
        return <div key={'box' + i} onClick={() => { this.onClick(i); onChange(i) }} className={i === this.state.selected ? 'toggle-box chosen' : 'toggle-box'} >
          <div className='title-holder'>
            <div className='title-holder__title'>{box.title}</div>
            {box.subtitle && <div className='title-holder__subtitle'>{box.subtitle}</div>}
          </div>
        </div>
      } else {
        return <div key={'box' + i} onClick={() => null } className={'toggle-box disabled'} >
          <div className='title-holder'>
            <div className='title-holder__title'>{box.title}</div>
            {box.subtitle && <div className='title-holder__subtitle'>{box.subtitle}</div>}
          </div>
        </div>
      }

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
    subtitle: PropTypes.string.isRequired,
    justified: PropTypes.bool
  })),
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

export default Toggle;
