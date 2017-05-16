import React from 'react'
import { shallow } from 'enzyme'
import Toggle from './Toggle'

describe('<Toggle />', () => {
  it('Should render with default props', () => {
    const wrapper = shallow(<Toggle />)
    expect(wrapper.find('.toggle-box').length).toBe(2)
    expect(wrapper.find('.chosen .title-holder .title-holder__text').text()).toBe('Selected Option Title')
  })
  it('Should render with passed props', () => {
    const wrapper = shallow(<Toggle options={[
    {title:'Hello', subtitle:'Hello World from Component'}, 
    {title:'Hello2', subtitle:'Hello World from Component2'}
    ]} />)
    expect(wrapper.find('.toggle-box').length).toBe(2)
    expect(wrapper.find('.toggle-boxes').childAt(0).find('.title-holder .title-holder__text').at(0).text()).toBe('Hello')
    expect(wrapper.find('.toggle-boxes').childAt(0).find('.title-holder .title-holder__text').at(1).text()).toBe('Hello World from Component')
    expect(wrapper.find('.toggle-boxes').childAt(1).find('.title-holder .title-holder__text').at(0).text()).toBe('Hello2')
    expect(wrapper.find('.toggle-boxes').childAt(1).find('.title-holder .title-holder__text').at(1).text()).toBe('Hello World from Component2')
  })
  it('Should toggle selected option onClick', () => {
    const wrapper = shallow(<Toggle options={[
    {title:'Hello', subtitle:'Hello World from Component'}, 
    {title:'Hello2', subtitle:'Hello World from Component2'}
    ]} selected={1} />)
    expect(wrapper.find('.toggle-box').at(0).hasClass('chosen')).toBe(true)
    expect(wrapper.find('.toggle-box').at(1).hasClass('chosen')).toBe(false)
    wrapper.find('.toggle-box').at(1).simulate('click')
    expect(wrapper.find('.toggle-box').at(0).hasClass('chosen')).toBe(false)
    expect(wrapper.find('.toggle-box').at(1).hasClass('chosen')).toBe(true)
  })
})