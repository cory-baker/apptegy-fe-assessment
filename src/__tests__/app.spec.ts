import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../App.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld)
    const elementToTest = wrapper.find('.hello')
    expect(elementToTest.text()).toContain('Hello world')
  })
})
