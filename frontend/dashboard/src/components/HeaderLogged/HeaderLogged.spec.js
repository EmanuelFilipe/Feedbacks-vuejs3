import { shallowMount } from '@vue/test-utils'
import HeaderLogged from './index.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: []
})

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged />', () => {
  it('should render logged correctly', async () => {
    router.push('/')
    router.isReady()

    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it.skip('should skip this test', () => {

  })

  it('should render 3 dots when there\'s not user logged', async () => {
    router.push('/')
    router.isReady()

    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('should render user name when there\'s user logged', async () => {
    router.push('/')
    router.isReady()
    mockStore.currentUser.name = 'Filipe'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('Filipe (sair)')
  })
})
