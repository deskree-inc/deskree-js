import {
	GetDefaultSchemaInterface,
	GetFormattedSchemaInterface,
	GetSchemaNoTableFoundInterface,
	GetSchemaWithoutAdminToken
} from "./config-response.interface"

export class ConfigResponse {

	getDefaultSchema(): GetDefaultSchemaInterface {
		return {
			data: {
				email: 'String',
				roles: 'Array<string>',
				updatedAt: 'String?',
				createdAt: 'String?',
				uid: 'UID'
			}
		}
	}

	getFormattedSchema(): GetFormattedSchemaInterface {
		return {
			data: {
				uid: {
					type: 'string',
					isOptional: false
				},
				roles: {
					type: 'string[]',
					isOptional: false
				},
				updatedAt: {
					type: 'string',
					isOptional: true
				},
				createdAt: {
					type: 'string',
					isOptional: true
				},
				email: {
					type: 'string',
					isOptional: false
				}
			}
		}
	}

	getSchemaNoTableFound(): GetSchemaNoTableFoundInterface {
		return {
			data: {
				message: 'The specified table does not exist.'
			}
		}
	}

	getSchemaWithoutAdminToken(): GetSchemaWithoutAdminToken {
		return {
			errors: [
				{
					code: '403',
					detail: 'You can only access config configurations via www.deskree.com',
					title: 'Forbidden',
				}
			]
		}
	}

}