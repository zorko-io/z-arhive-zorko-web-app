import Spec from './Spec'

describe('Spec', () => {
  it('should encode first dimention field', () => {
    const field = {text: 'test', type: 'dimention'}
    const initialSpec = Object.freeze({
      data: {values: []},
      mark: 'bar'
    })

    const result = Spec.encodeField(initialSpec, field)

    expect(result).toEqual({
      data: {values: []},
      mark: 'bar',
      encoding: {
        x: {
          field: 'test',
          type: 'ordinal'
        }
      }
    })
  })

  it('should encode first measure field', () => {
    const field = {text: 'test', type: 'measure'}
    const initialSpec = Object.freeze({
      data: {values: []},
      mark: 'point'
    })

    const result = Spec.encodeField(initialSpec, field)

    expect(result).toEqual({
      data: {values: []},
      mark: 'point',
      encoding: {
        x: {
          field: 'test',
          type: 'quantitative'
        }
      }
    })
    expect(initialSpec)
  })

  it('should generate default spec if provided spec is empty', () => {
    const field = {text: 'test', type: 'measure'}
    const initialSpec = Object.freeze({})

    const result = Spec.encodeField(initialSpec, field)

    expect(result).toEqual({
      data: {values: []},
      mark: 'tick',
      encoding: {
        x: {
          field: 'test',
          type: 'quantitative'
        }
      }
    })
  })

  it('should generate default mark as `tick` if provided spec doesn`t have it', () => {
    const field = {text: 'test', type: 'measure'}
    const initialSpec = Object.freeze({data: {values: []}})

    const result = Spec.encodeField(initialSpec, field)

    expect(result).toEqual({
      data: {values: []},
      mark: 'tick',
      encoding: {
        x: {
          field: 'test',
          type: 'quantitative'
        }
      }
    })
  })

  it('should return copy of initial spec if field wasn`t not provided', () => {
    const initialSpec = Object.freeze({
      data: {values: []},
      mark: 'point',
      encoding: {}
    })

    const result = Spec.encodeField(initialSpec)

    expect(result).toEqual(initialSpec)
    expect(result).not.toBe(initialSpec)
  })
})
