jest.mock('../../api/datumService')

import * as actions from './actions'

describe('Datum Actions', () => {
  let context

  beforeEach(() => {
    context = {
      commit: jest.fn()
    }
  })

  it('set datum', async () => {
    expect.assertions(1)

    await actions.loadDatum(context, {name: 'foo'})

    expect(context.commit).toHaveBeenCalledWith('setDatum', 'datum by foo')
  })
})
