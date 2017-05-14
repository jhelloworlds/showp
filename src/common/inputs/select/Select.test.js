import React from 'react'
import { shallow, mount } from 'enzyme'
import Select from './Select'
import FaBars from 'react-icons/lib/fa/bars'

describe('<Select />', () => {
  it('Should render with default props', () => {
    const wrapper = shallow(<Select />)
    expect(wrapper.find('label').text()).toBe('SELECT')
    expect(wrapper.find('.form-item').text()).toMatch(/Option 1/)
  })
  it('Should render a label with passed prop text', () => {
    const wrapper = shallow(<Select label='Test label' />)
    expect(wrapper.find('label').text()).toBe('TEST LABEL')
  })
  it('Should render options with passed prop array of strings', () => {
    const wrapper = shallow(<Select options={['Option Test', 'Some other Option']} />)
    expect(wrapper.find('.form-item').text()).toMatch(/Option Test/)
    expect(wrapper.find('.dropdown ul').children().length).toEqual(2)
    expect(wrapper.find('.dropdown ul').childAt(1).text()).toBe('Some other Option')
  })
  it('Should show dropdown on Click', () => {
    const wrapper = shallow(<Select options={['Option Test', 'Some other Option']} />)
    expect(wrapper.find('.dropdown').hasClass('active')).toBe(false)
    wrapper.find('.form-item').simulate('click')
    expect(wrapper.find('.dropdown').hasClass('active')).toBe(true)
  })
  it('Should change the selected value when different option clicked', () => {
    const wrapper = mount(<Select />)
    expect(wrapper.find('.form-item').text()).toMatch(/Option 1/)
    wrapper.find('.form-item').simulate('click')
    wrapper.find('.dropdown ul').childAt(1).simulate('click')
    expect(wrapper.find('.form-item').text()).toMatch(/Option 2/)
  })
})