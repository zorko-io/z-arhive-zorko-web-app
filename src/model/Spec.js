import * as R from 'ramda'

const FIELD_TYPES = {
  QUANTATIVE: 'quantitative',
  ORDINAL: 'ordinal',
  NOMINAL: 'nominal'
}
const DEFAULT_SPEC = {
  data: {values: []},
  mark: 'tick'
}
const getDefaultSpec = (spec = DEFAULT_SPEC) => {
  return R.merge(DEFAULT_SPEC, spec)
}
const fieldTypeToSpecType = (type) => {
  if (type === 'measure') {
    return FIELD_TYPES.QUANTATIVE
  } else {
    return FIELD_TYPES.ORDINAL
  }
}
const getEncoding = R.prop('encoding')
const xChannelField = R.path(['encoding', 'x', 'field'])

const encodeField = (spec = DEFAULT_SPEC, field) => {
  spec = getDefaultSpec(spec)
  const encodedField = xChannelField(spec)
  let encoding = getEncoding(spec)

  if (!encoding) {
    encoding = {}
  }

  if (!encodedField && field) {
    encoding = R.merge(encoding, {
      x: {
        field: field.text,
        type: fieldTypeToSpecType(field.type)
      }
    })
  }

  return R.merge(spec, {
    encoding
  })
}

const decodeField = (spec, field) => {}

class Spec {
  static of = (value) => new Spec(value)

  constructor (specValue) {
    let value = R.clone(specValue)
    this._value = getDefaultSpec(value)
  }

  encodeField (field) {
    return new Spec(encodeField(this._value, field))
  }

  decodeField (field) {
    return new Spec(decodeField(this._value, field))
  }

  value () {
    return R.clone(this._value)
  }
}

export default Spec
