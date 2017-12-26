import {createLocalVue} from 'vue-test-utils'
import AppFactory from './AppFactory'

const LocalVue = createLocalVue()

describe('Integration - App', () => {
  it('can initialize application', () => {
    const app = AppFactory()

    const appRoot = app(({Vue: LocalVue}))

    expect(appRoot).toBeTruthy()
  })
})
