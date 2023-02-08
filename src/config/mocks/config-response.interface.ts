export type GetDefaultSchemaInterface = {
  data: GetDefaultSchemaDataInterface[]
  attributes: GetDefaultSchemaAttributesInterface
}

export type GetDefaultSchemaDataInterface = {
  email: string,
  roles: string,
  updatedAt: string,
  createdAt: string,
  uid: string
  name: string
}

export type GetDefaultSchemaAttributesInterface = {
  name: string
}

export type GetSchemaWithoutAdminToken = {
  errors: [
    {
      code: string,
      detail: string,
      title: string,
    }
  ]
}

export type GetFormattedSchemaInterface = {
  data: {
    createdAt: {
      type: string,
      isOptional: true
    },
    updatedAt: {
      type: string,
      isOptional: true
    },
    email: {
      type: string,
      isOptional: false
    },
    roles: {
      type: string,
      isOptional: false
    },
    uid: {
      type: string,
      isOptional: false
    }
  }
}

export type GetSchemaNoTableFoundInterface = {
  data: {
    message: string
  }
}