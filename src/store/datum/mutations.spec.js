import * as mutations from './mutations'
import createState from './state'

describe('Datum Mutations', () => {
  it('set datum', async () => {
    const state = createState()
    const fakeDatum = 'foo'

    mutations.setDatum(state, fakeDatum)

    expect(state.datum).toEqual(fakeDatum)
  })
})
