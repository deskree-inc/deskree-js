export class ConfigResponse {

	getDefaultSchema(): object {
		return {
			data: [
				{
					uid: 'dzhJpD9PyiLrzx19ErK9',
					attributes: {
						config: {
							updatedAt: true,
							timezone: 'America/Sao_Paulo',
							createdAt: true
						},
						model: {
							uid: 'UID',
							createdAt: 'String?',
							email: 'String',
							roles: 'Array<string>',
							updatedAt: 'String?'
						},
						name: 'users',
						order: 1,
						subCollections: []
					}
				}
			]
		}
	}
}