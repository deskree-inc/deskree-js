export function formatModelTypes(model: any) {
  Object.keys(model).forEach((key) => {

    if (model[key].includes('s<Array<string>>?')) { model[key] = { type: 'string[]', isOptional: true } }
    else if (model[key].includes('s<string>?')) { model[key] = { type: 'string', isOptional: true } }
    else if (model[key].includes('s<string>')) { model[key] = { type: 'string', isOptional: false } }
    else if (model[key].includes('s<Array<string>>')) { model[key] = { type: 'string[]', isOptional: false } }

    switch (model[key]) {
      case 'UID':
        model[key] = { type: 'string', isOptional: false }
        break

      case 'String':
        model[key] = { type: 'string', isOptional: false }
        break

      case 'String':
        model[key] = { type: 'string', isOptional: false }
        break

      case 'Integer':
        model[key] = { type: 'number', isOptional: false }
        break

      case 'Boolean':
        model[key] = { type: 'boolean', isOptional: false }
        break

      case 'Array<string>':
        model[key] = { type: 'string[]', isOptional: false }
        break

      case 'Array<integer>':
        model[key] = { type: 'number[]', isOptional: false }
        break

      case 'Array<float>':
        model[key] = { type: 'number[]', isOptional: false }
        break

      case 'Array<boolean>':
        model[key] = { type: 'boolean[]', isOptional: false }
        break

      case 'Storage':
        model[key] = { type: 'string', isOptional: false }
        break

      case 'UID?':
        model[key] = { type: 'string', isOptional: true }
        break

      case 'String?':
        model[key] = { type: 'string', isOptional: true }
        break

      case 'String?':
        model[key] = { type: 'string', isOptional: true }
        break

      case 'Integer?':
        model[key] = { type: 'number', isOptional: true }
        break

      case 'Boolean?':
        model[key] = { type: 'boolean', isOptional: true }
        break

      case 'Array<string>?':
        model[key] = { type: 'string[]', isOptional: true }
        break

      case 'Array<integer>?':
        model[key] = { type: 'number[]', isOptional: true }
        break

      case 'Array<float>?':
        model[key] = { type: 'number[]', isOptional: true }
        break

      case 'Array<boolean>?':
        model[key] = { type: 'boolean[]', isOptional: true }
        break

      case 'Storage?':
        model[key] = { type: 'string', isOptional: true }
        break

      case 'Users<string>?':
        model[key] = { type: 'string', isOptional: true }
        break
    }
  })

  return model
}