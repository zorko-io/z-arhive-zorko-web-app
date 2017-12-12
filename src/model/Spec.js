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
const merge = R.merge
const clone = R.clone

const getDefaultSpec = (spec = DEFAULT_SPEC) => {
  return merge(DEFAULT_SPEC, spec)
}
const fieldTypeToSpecType = (type) => {
  if (type === 'measure') {
    return FIELD_TYPES.QUANTATIVE
  } else {
    return FIELD_TYPES.ORDINAL
  }
}
const getEncoding = R.prop('encoding')

const encodeField = (spec, field) => {
  let encoding = getEncoding(spec)

  if (!encoding) {
    encoding = {}
  }

  const channelNames = Object.keys(encoding)
  const channels = channelNames.map((name) => {
    const channel = encoding[name]
    return {
      name: name,
      field: channel ? channel.field : null
    }
  })

  const isChannelInUse = (channelName) => (
    channels.find((channel) => (channel.name === channelName && channel.field))
  )

  if (field) {
    if (!isChannelInUse('x')) {
      encoding = merge(encoding, {
        x: {
          field: field.text,
          type: fieldTypeToSpecType(field.type)
        }
      })
    } else if (!isChannelInUse('y')) {
      encoding = merge(encoding, {
        y: {
          field: field.text,
          type: fieldTypeToSpecType(field.type)
        }
      })
    }
  }

  return merge(spec, {encoding})
}

const decodeField = (spec, field) => {
  let encoding = getEncoding(spec)

  if (encoding.x.field === field.text) {
    delete encoding.x
  } else if (encoding.y.field === field.text) {
    delete encoding.y
  }

  return merge(spec, {encoding})
}

class Spec {
  static of = (value) => new Spec(value)

  constructor (specValue) {
    let value = clone(specValue)
    this._value = getDefaultSpec(value)
  }

  encodeField (field) {
    return new Spec(
      encodeField(this._value, field)
    )
  }

  decodeField (field) {
    return new Spec(
      decodeField(this._value, field)
    )
  }

  value () {
    return clone(this._value)
  }
}

export default Spec
