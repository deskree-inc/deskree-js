export class AuthResponse {

	signUpWithEmailAndPasswordSetupSuccess(): object {
		return {
			data: {
				uid: '3wZAV6ulYZVS8jj1mXW7WBvLF4c2',
				email: 'user@example.com',
				emailVerified: false,
				disabled: false,
				idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFmZjFlNDJlNDE0M2I4MTQxM2VjMTI1MzQwOTcwODUxZThiNDdiM2YiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVza3JlZS05YTEyZTg3Ny1lYmEyLTQzNDctOCIsImF1ZCI6ImRlc2tyZWUtOWExMmU4NzctZWJhMi00MzQ3LTgiLCJhdXRoX3RpbWUiOjE2NzE2MzAxMTksInVzZXJfaWQiOiIzd1pBVjZ1bFlaVlM4amoxbVhXN1dCdkxGNGMyIiwic3ViIjoiM3daQVY2dWxZWlZTOGpqMW1YVzdXQnZMRjRjMiIsImlhdCI6MTY3MTYzMDExOSwiZXhwIjoxNjcxNjMzNzE5LCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidXNlckBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cKME9plViOXC_f0E73tHVNLNg-pMg37YdR4CKAfhq9QpTL_3EoDMfQau6B55bo4mSyDtbo2UBHs01BvRGZXqxHgP8txLwS166iZcgOcsnWsFW31GA5aDOaccFe53qc00SsFdwHRGsnpqu8Gkmn8GbIbPIq9rIDtvZfonNsjc5IBFkKMFnvWNeV7msU5R6fJXJiZVQqvDnbYz4gGcVFTP9dv1A27S1k0j3bzyg2A2gJAdER84BQEJB980MQ5iP4K4hsaJX7kDO1CfSnvzkFOHuPogl3Z6P1xGaC-_wh9Bzc1D_L8QzVAqwQ-T-juAnovceVNqBHdU5mJ01G9FXzJ8Qg',
				refreshToken: 'AOkPPWR7vjoJXJV4JZWgtQMhBInom14GKlRdstTQOlpTZdC9mNiuXPb10rk7B_QvZkRGfW3gqOLQSs2yoh33JzLiHRoKP0z5u24s8LYfLFp3FO06ICzrTAp0n56ZtXlaMsn-OnxFYeVXRjoi9qK5A41gknDgZm-6pkjlBQxLzcxMFZ0Z31Tw5_3WxEtPsLLSQ_fsv_aNvAEnA0keOXNOXJ2MSxnYAMKSl9NQ8YSUcUyGmgVpdQORDGw',
				expiresIn: '3600'
			}
		}
	}

	signUpWithEmailAndPasswordSetupNotComplete(): object {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '422',
						title: 'Unprocessable Entity',
						detail: 'Email/password setup is not complete. Please complete the Email/Password Authentication setup in your project'
					}
				]
			}
		}
	}

	signUpWithEmailAndPasswordEmailAlreadyInUse(): object {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '422',
						title: 'Unprocessable Entity',
						detail: 'The email address is already in use by another account.'
					}
				]
			}
		}
	}

	signInWithEmailAndPasswordEmailNotFound(): object {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '400',
						title: 'Bad Request',
						detail: 'EMAIL_NOT_FOUND'
					}
				]
			}
		}
	}

	signInWithEmailAndPasswordInvalidPassword(): object {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '400',
						title: 'Bad Request',
						detail: 'INVALID_PASSWORD'
					}
				]
			}
		}
	}

	createUrlForOAuthSignInSuccess(): object {
		return {}
	}

	createUrlForOAuthSignInIdentityProviderConfigNotFound(): object {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '400',
						title: 'Bad Request',
						detail: 'OPERATION_NOT_ALLOWED : The identity provider configuration is not found.'
					}
				]
			}
		}
	}

}