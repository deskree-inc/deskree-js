export function formatModelTypes(model: any) {
  Object.keys(model).forEach((key) => {
    const pureType = model[key].replace("?", "").toLowerCase()

    if (model[key].includes('s<string>')) {
      model[key] = { type: 'string', isOptional: model[key].includes('?') ? true : false }
    }
    else if (model[key].includes('s<Array<string>>')) {
      model[key] = { type: 'string[]', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'string' || 'uid' || 'storage') {
      model[key] = { type: 'string', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'array<integer>' || 'array<float>') {
      model[key] = { type: 'number[]', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'integer') {
      model[key] = { type: 'number', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'boolean') {
      model[key] = { type: 'boolean', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'array<string>') {
      model[key] = { type: 'string[]', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'array<boolean>') {
      model[key] = { type: 'boolean[]', isOptional: model[key].includes('?') ? true : false }
    }
    else if (pureType === 'map') {
      model[key] = { type: 'object', isOptional: model[key].includes('?') ? true : false }
    }
  })

  return model
}