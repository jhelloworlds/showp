import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import FaBars from 'react-icons/lib/fa/bars'

describe('<Header />', () => {
  it('Should render an empty toolbar', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('.header').length).toEqual(1)
  })
  it('Should render text passed as prop', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('#searchText').length).toEqual(1)
  })
  it('Should render right and left icnons when respective props are passed', () => {
    const wrapper = shallow(<Header rightIcon={<FaBars />} />)
    expect(wrapper.find('.rightIcon').childAt(0).type()).not.toBeNull()
    expect(wrapper.find('.leftIcon').childAt(0).type()).toBeNull()
    const wrapper1 = shallow(<Header leftIcon={<FaBars />} />)
    expect(wrapper1.find('.rightIcon').childAt(0).type()).toBeNull()
    expect(wrapper1.find('.leftIcon').childAt(0).type()).not.toBeNull()
  })
})
