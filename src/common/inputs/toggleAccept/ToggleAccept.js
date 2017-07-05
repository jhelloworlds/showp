import React, { Component } from 'react'
import reactStringReplace from 'react-string-replace'
import { array, func } from 'prop-types'

import './ToggleAccept.css'

class ToggleAccept extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  handleChange = (item) => {
    this.setState({ selected: item.id })
    this.props.onChange(item)
  }

  render() {
    const { selected } = this.state

    var options = this.props.data.map((item) => {
      var description = reactStringReplace(item.description, item.highlight, (match, i) => (
        <mark key={i}>{match}</mark>
      ))
      return (
        <div className="accept" key={item.id}>
          <div
            className={selected === item.id ? "icon selected" : "icon"}
            onClick={() => { this.handleChange(item) }}
          ></div>
          <div className="accept__description">{description}</div>
        </div>
      )
    })

    return (
      <div className="toggle-accept">
        {options}
      </div>
    )
  }

  static propTypes = {
    data: array,
    onChange: func
  }
}

export default ToggleAccept
