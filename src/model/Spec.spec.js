import Spec from './Spec'

describe('Spec Model', () => {
  describe('static helpers to create', () => {
    it('should wrap spec value in spec object', () => {
      const initialSpec = Object.freeze({
        data: {values: []},
        mark: 'point'
      })

      const result = Spec.of(initialSpec)

      expect(result instanceof Spec).toBeTruthy()
    })

    it('should generate default spec value', () => {
      const spec = Spec.of()

      expect(spec.value()).toEqual({
        data: {values: []},
        mark: 'tick'
      })
    })
  })

  describe('should copy value during creation', () => {
    const initialSpec = {
      data: {values: []},
      mark: 'point'
    }

    let spec = new Spec(initialSpec)

    initialSpec.encoding = {x: {field: 'test'}}

    expect(spec.value()).toEqual({
      data: {values: []},
      mark: 'point'
    })
    expect(spec.value()).not.toBe(initialSpec)
  })

  describe('should copy value', () => {
    const initialSpec = {
      data: {values: []},
      mark: 'point'
    }

    const spec = new Spec(initialSpec)
    const value = spec.value()

    value.test = 'baz'

    expect(spec.value()).toEqual(initialSpec)
    expect(spec.value()).not.toBe(initialSpec)
  })

  describe('Encoding Fields', () => {
    it('should encode first dimention field', () => {
      const field = {text: 'test', type: 'dimention'}
      let spec = Spec.of({
        data: {values: []},
        mark: 'bar'
      })

      const result = spec.encodeField(field)

      expect(result.value()).toEqual({
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
      const spec = Spec.of({
        data: {values: []},
        mark: 'point'
      })

      const result = spec.encodeField(field)

      expect(result.value()).toEqual({
        data: {values: []},
        mark: 'point',
        encoding: {
          x: {
            field: 'test',
            type: 'quantitative'
          }
        }
      })
    })

    it('should encode second dimention field', () => {
      const field = {text: 'bar', type: 'dimention'}
      const spec = Spec.of({
        data: {values: []},
        mark: 'point',
        encoding: {
          x: {
            field: 'test',
            type: 'quantitative'
          }
        }
      })

      const result = spec.encodeField(field)

      expect(result.value()).toEqual({
        data: {values: []},
        mark: 'point',
        encoding: {
          x: {
            field: 'test',
            type: 'quantitative'
          },
          y: {
            field: 'bar',
            type: 'ordinal'
          }
        }
      })
    })

    it('should return copy of initial spec if field wasn`t not provided', () => {
      const spec = Spec.of({
        data: {values: []},
        mark: 'point',
        encoding: {}
      })

      const result = spec.encodeField()

      expect(result.value()).toEqual({
        data: {values: []},
        mark: 'point',
        encoding: {}
      })
    })
  })

  describe('Decoding Fields', () => {
    it('remove field from x channel', () => {
      const field = {text: 'foo', type: 'dimention'}
      let spec = Spec.of({
        data: {values: []},
        mark: 'bar',
        encoding: {
          x: {
            field: 'foo',
            type: 'ordinal'
          },
          y: {
            field: 'bar',
            type: 'ordinal'
          }
        }
      })

      const result = spec.decodeField(field)

      expect(result.value()).toEqual({
        data: {values: []},
        mark: 'bar',
        encoding: {
          y: {
            field: 'bar',
            type: 'ordinal'
          }
        }
      })
    })

    it('remove field from y channel', () => {
      const field = {text: 'foo', type: 'dimention'}
      let spec = Spec.of({
        data: {values: []},
        mark: 'bar',
        encoding: {
          x: {
            field: 'bar',
            type: 'ordinal'
          },
          y: {
            field: 'foo',
            type: 'ordinal'
          }
        }
      })

      const result = spec.decodeField(field)

      expect(result.value()).toEqual({
        data: {values: []},
        mark: 'bar',
        encoding: {
          x: {
            field: 'bar',
            type: 'ordinal'
          }
        }
      })
    })
  })
})
