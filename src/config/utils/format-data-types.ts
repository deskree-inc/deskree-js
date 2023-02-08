export function formatModelTypes(model: any) {
  Object.keys(model).forEach((key) => {
    const pureType = model[key].replace("?", "").toLowerCase()

    if (model[key].includes('s<Array<string>>')) {
      model[key] = { type: 'string[]', isOptional: model[key].includes('?') ? true : false }
    }
    else if (model[key].includes('s<string>')) {
      model[key] = { type: 'string', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'array<string>') {
      model[key] = { type: 'string[]', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'array<integer>' || pureType === 'array<float>') {
      model[key] = { type: 'number[]', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'array<boolean>') {
      model[key] = { type: 'boolean[]', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'string' || pureType === 'uid' || pureType === 'storage') {
      model[key] = { type: 'string', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'integer' || pureType === 'float') {
      model[key] = { type: 'number', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'boolean') {
      model[key] = { type: 'boolean', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'map') {
      model[key] = { type: 'object', isOptional: model[key].includes('?') ? true : false }
    }
  })

  return model
}

export function formatModelDataTypes(model: any) {
  Object.keys(model).forEach((key) => {
    const pureType = model[key].replace("?", "").toLowerCase()

    if (model[key].includes('s<Array<string>>')) {
      if (model[key].includes('?')) {
        model[`${key}?`] = model[key].replace('<Array<string>>?', 'DataType[]')
        delete model[key]
      } else {
        model[key] = model[key].replace('<Array<string>>', 'DataType[]')
      }
    }
    else if (model[key].includes('s<string>')) {
      if (model[key].includes('?')) {
        model[`${key}?`] = model[key].replace('<string>?', 'DataType')
        delete model[key]
      } else {
        model[key] = model[key].replace('<string>', 'DataType')
      }
    }
    else if (pureType === 'array<string>') {
      if (model[key].includes('?')) {
        model[`${key}?`] = 'string[]'
        delete model[key]
      } else {
        model[key] = 'string[]'
      }
    }
    else if (pureType === 'array<integer>' || pureType === 'array<float>') {
      if (model[key].includes('?')) {
        model[`${key}?`] = 'number[]'
        delete model[key]
      } else {
        model[key] = 'number[]'
      }
    }
    else if (pureType === 'array<boolean>') {
      if (model[key].includes('?')) {
        model[`${key}?`] = 'boolean[]'
        delete model[key]
      } else {
        model[key] = 'boolean[]'
      }
    }
    else if (pureType === 'string' || pureType === 'uid' || pureType === 'storage') {
      if (model[key].includes('?')) {
        model[`${key}?`] = 'string'
        delete model[key]
      } else {
        model[key] = 'string'
      }
    }
    else if (pureType === 'integer') {
      if (model[key].includes('?')) {
        model[`${key}?`] = 'number'
        delete model[key]
      } else {
        model[key] = 'number'
      }
    }
    else if (pureType === 'boolean') {
      if (model[key].includes('?')) {
        model[`${key}?`] = 'boolean'
        delete model[key]
      } else {
        model[key] = 'boolean'
      }
    }
    else if (pureType === 'map') {
      if (model[key].includes('?')) {
        model[`${key}?`] = 'object'
        delete model[key]
      } else {
        model[key] = 'object'
      }
    }
  })

  return model
}