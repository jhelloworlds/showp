import React from 'react'
import { shallow } from 'enzyme'
import TextInput from './TextInput'

describe('<TextInput />', () => {
  it('Should render a label with default text', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('label').text()).toBe("PATIENT NAME")
  })
  it('Should render a label with provided prop text in upper-case', () => {
    const wrapper = shallow(<TextInput label='New Patient' />)
    expect(wrapper.find('label').text()).toBe("NEW PATIENT")
  })
  it('Should render an input field with default placeholder text', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('input').prop('placeholder')).toBe("Erik Kevin Smith")
  })
  it('Should render an input field with placeholder prop text', () => {
    const wrapper = shallow(<TextInput placeholder='David Mikadze' />)
    expect(wrapper.find('input').prop('placeholder')).toBe("David Mikadze")
  })
})  