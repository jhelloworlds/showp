import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('Should render a filled button without icon and default text:"Submit"', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('.button').length).toEqual(1)
    expect(wrapper.find('.fill').length).toEqual(1)
    expect(wrapper.find('.text').text()).toBe('Submit')
  })
  it('Should render text passed as prop', () => {
    const wrapper = shallow(<Button text='hello' />)
    expect(wrapper.find('.text').text()).toBe('hello')
  })
  it('Should render an icon when passed an icon prop true', () => {
    const wrapper = shallow(<Button icon />)
    expect(wrapper.find('.icon').length).toEqual(2)
  })
  it('Should have a class noFill if passed fill={false} prop', () => {
    const wrapper = shallow(<Button fill={false} />)
    expect(wrapper.find('.noFill').length).toEqual(1)
  })
})