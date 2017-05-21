import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Header from './Header'
import FaBars from 'react-icons/lib/fa/bars'

const store = createStore(() => { } )

describe('<Header />', () => {
  it('Should render an empty toolbar', () => {
    const wrapper = shallow(<Header store={store} />)
    expect(wrapper.find('.header').length).toEqual(1)
  })
  it('Should render text passed as prop', () => {
    const wrapper = shallow(<Provider store={store} ><Header /></Provider>)
    expect(wrapper.find('#searchText').length).toEqual(1)
  })
  it('Should render right and left icnons when respective props are passed', () => {
    const wrapper = shallow(<Provider store={store} ><Header rightIcon={<FaBars />} /></Provider>)
    expect(wrapper.find('.rightIcon').childAt(0).type()).not.toBeNull()
    expect(wrapper.find('.leftIcon').childAt(0).type()).toBeNull()
    const wrapper1 = shallow(<Provider store={store} ><Header leftIcon={<FaBars />} /></Provider>)
    expect(wrapper1.find('.rightIcon').childAt(0).type()).toBeNull()
    expect(wrapper1.find('.leftIcon').childAt(0).type()).not.toBeNull()
  })
})
