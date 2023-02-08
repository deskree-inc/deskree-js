export class RestResponse {

	getEmpty(): object {
		return { meta: { total: 0 }, data: [] }
	}

	getError(): object {
		return {
			response: {
				data: {
					errors: [{
						code: '500',
						title: 'Internal Server Error',
						detail: 'Bad collection configuration object: no endpoint configuration found.'
					}]
				}
			}
		}
	}

	getWhere(): object {
		return {
			meta: {
				total: 1,
				includesCount: 0,
				limit: 50,
				page: 1,
			}, data: [{
				uid: '1d97lJCH6gCPRcrx9pMx',
				attributes: {
					author: '',
					createdAt: '2023-02-07T13:01:53-03:00',
					updatedAt: '2023-02-07T13:01:53-03:00',
					name: 'Desk',
					price: 199.9
				}
			}]
		}
	}

	getPage(): object {
		return {
			meta: {
				total: 6,
				page: '1',
				limit: '5'
			},
			data: [
				{
					uid: 'BPJcWcDwV4wzNaQxI7es',
					attributes: {
						author: '',
						createdAt: '2022-12-06T15:33:38-03:00',
						updatedAt: '2022-12-06T15:33:38-03:00',
						name: 'Desk',
						price: 199.9
					}
				},
				{
					uid: 'BwtNyX8bnFSelJVEMaX3',
					attributes: {
						price: 1229.9,
						createdAt: '2022-12-06T15:36:05-03:00',
						author: '',
						updatedAt: '2022-12-06T15:36:05-03:00',
						name: 'Computer'
					}
				},
				{
					uid: 'BzUP4ZRKnReS2dv9vf0l',
					attributes: {
						author: '',
						name: 'Cellphone',
						updatedAt: '2022-12-06T15:36:15-03:00',
						createdAt: '2022-12-06T15:36:15-03:00',
						price: 999.9
					}
				},
				{
					uid: 'KeFEQjteBn01kY9mMzn5',
					attributes: {
						name: 'Audio Interface',
						author: '',
						updatedAt: '2022-12-06T15:35:53-03:00',
						price: 149.9,
						createdAt: '2022-12-06T15:35:53-03:00'
					}
				},
				{
					uid: 'bwdh0xB5i9hFDc8dIQ2m',
					attributes: {
						price: 49.9,
						name: 'Table',
						author: '',
						updatedAt: '2022-12-06T15:35:42-03:00',
						createdAt: '2022-12-06T15:35:42-03:00'
					}
				},
				{
					uid: 'twQ75gheDnKz0ldMGrwe',
					attributes: {
						createdAt: '2022-12-06T15:35:31-03:00',
						updatedAt: '2022-12-06T15:35:31-03:00',
						name: 'Booth',
						price: 19.9,
						author: ''
					}
				}
			]
		}
	}

	getLimit(): object {
		return {
			meta: {
				total: 6,
				limit: 2,
				includesCount: 0,
				page: 1,
			},
			data: [
				{
					uid: '1d97lJCH6gCPRcrx9pMx',
					attributes: {
						author: '',
						updatedAt: '2023-02-07T13:01:53-03:00',
						name: 'Desk',
						price: 199.9,
						createdAt: '2023-02-07T13:01:53-03:00'
					}
				},
				{
					uid: '6uhSG03fGsaBjYxsS0rf',
					attributes: {
						createdAt: '2023-01-31T08:59:05-03:00',
						author: '',
						updatedAt: '2023-01-31T08:59:05-03:00',
						price: 100.1,
						name: 'product'
					}
				}
			]
		}
	}

	getSortingAsc(): object {
		return {
			meta: {
				total: 6
			},
			data: [
				{
					uid: 'KeFEQjteBn01kY9mMzn5',
					attributes: {
						updatedAt: '2022-12-06T15:35:53-03:00',
						name: 'Audio Interface',
						author: '',
						price: 149.9,
						createdAt: '2022-12-06T15:35:53-03:00'
					}
				},
				{
					uid: 'twQ75gheDnKz0ldMGrwe',
					attributes: {
						name: 'Booth',
						author: '',
						updatedAt: '2022-12-06T15:35:31-03:00',
						price: 19.9,
						createdAt: '2022-12-06T15:35:31-03:00'
					}
				},
				{
					uid: 'BzUP4ZRKnReS2dv9vf0l',
					attributes: {
						updatedAt: '2022-12-06T15:36:15-03:00',
						author: '',
						name: 'Cellphone',
						price: 999.9,
						createdAt: '2022-12-06T15:36:15-03:00'
					}
				},
				{
					uid: 'BwtNyX8bnFSelJVEMaX3',
					attributes: {
						updatedAt: '2022-12-06T15:36:05-03:00',
						createdAt: '2022-12-06T15:36:05-03:00',
						price: 1229.9,
						name: 'Computer',
						author: ''
					}
				},
				{
					uid: 'BPJcWcDwV4wzNaQxI7es',
					attributes: {
						price: 199.9,
						updatedAt: '2022-12-06T15:33:38-03:00',
						name: 'Desk',
						author: '',
						createdAt: '2022-12-06T15:33:38-03:00'
					}
				},
				{
					uid: 'bwdh0xB5i9hFDc8dIQ2m',
					attributes: {
						createdAt: '2022-12-06T15:35:42-03:00',
						name: 'Table',
						price: 49.9,
						updatedAt: '2022-12-06T15:35:42-03:00',
						author: ''
					}
				}
			]
		}
	}

	getSortingDesc(): object {
		return {
			meta: {
				total: 6
			},
			data: [
				{
					uid: 'BwtNyX8bnFSelJVEMaX3',
					attributes: {
						price: 1229.9,
						name: 'Computer',
						author: '',
						updatedAt: '2022-12-06T15:36:05-03:00',
						createdAt: '2022-12-06T15:36:05-03:00'
					}
				},
				{
					uid: 'BzUP4ZRKnReS2dv9vf0l',
					attributes: {
						price: 999.9,
						createdAt: '2022-12-06T15:36:15-03:00',
						updatedAt: '2022-12-06T15:36:15-03:00',
						name: 'Cellphone',
						author: ''
					}
				},
				{
					uid: 'BPJcWcDwV4wzNaQxI7es',
					attributes: {
						author: '',
						name: 'Desk',
						updatedAt: '2022-12-06T15:33:38-03:00',
						createdAt: '2022-12-06T15:33:38-03:00',
						price: 199.9
					}
				},
				{
					uid: 'KeFEQjteBn01kY9mMzn5',
					attributes: {
						createdAt: '2022-12-06T15:35:53-03:00',
						updatedAt: '2022-12-06T15:35:53-03:00',
						name: 'Audio Interface',
						price: 149.9,
						author: ''
					}
				},
				{
					uid: 'bwdh0xB5i9hFDc8dIQ2m',
					attributes: {
						createdAt: '2022-12-06T15:35:42-03:00',
						author: '',
						name: 'Table',
						updatedAt: '2022-12-06T15:35:42-03:00',
						price: 49.9
					}
				},
				{
					uid: 'twQ75gheDnKz0ldMGrwe',
					attributes: {
						name: 'Booth',
						createdAt: '2022-12-06T15:35:31-03:00',
						price: 19.9,
						author: '',
						updatedAt: '2022-12-06T15:35:31-03:00'
					}
				}
			]
		}
	}

	insertSuccess(): object {
		return {
			data: {
				name: 'some name',
				updatedAt: '2022-12-08T11:50:09-03:00',
				author: '',
				createdAt: '2022-12-08T11:50:09-03:00',
				price: 10,
				uid: 'TAvfhJTEzTIxho1DqviQ'
			}
		}
	}

	insertFail(): object {
		return {
			errors: [
				{
					propertyErrors: [],
					typeErrors: [],
					propertyMissingErrors: [
						{
							code: '422',
							title: 'Unprocessable Entry',
							detail: "Required property price from the 'products' database table is missing"
						}
					]
				}
			]
		}
	}

	updateSuccess(addedProduct: any): object {
		return {
			data: {
				uid: addedProduct.uid,
				name: addedProduct.name,
				price: 19.9,
				author: addedProduct.author,
				createdAt: addedProduct.createdAt,
				updatedAt: addedProduct.updatedAt,
			}
		}
	}

	updateFail(): object {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '404',
						title: 'Not found',
						detail: 'Requested object is not found'
					}
				]
			}
		}
	}

	deleteSuccess(uid: string): object {
		return {
			data: {
				uid,
				resource: 'products'
			},
			meta: {},
			info: {
				action: 'delete',
				webhooksTriggered: 0
			}
		}
	}

	deleteFail(): object {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '404',
						title: 'Not found',
						detail: 'Requested object is not found'
					}
				]
			}
		}
	}
}

