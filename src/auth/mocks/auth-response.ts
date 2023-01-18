import {
	AuthResponseErrorInterface,
	SignUpWithEmailAndPasswordInterface,
	CreateUrlForOAuthSignInSuccessInterface
} from "./auth-response.interface"

export class AuthResponse {

	signUpWithEmailAndPasswordSetupSuccess(): SignUpWithEmailAndPasswordInterface {
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

	signUpWithEmailAndPasswordSetupNotComplete(): AuthResponseErrorInterface {
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

	signUpWithEmailAndPasswordEmailAlreadyInUse(): AuthResponseErrorInterface {
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

	signInWithEmailAndPasswordEmailNotFound(): AuthResponseErrorInterface {
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

	signInWithEmailAndPasswordInvalidPassword(): AuthResponseErrorInterface {
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

	createUrlForOAuthSignWithGoogleInSuccess(): CreateUrlForOAuthSignInSuccessInterface {
		return {
			data: {
				kind: 'identitytoolkit#CreateAuthUriResponse',
				authUri: 'https://accounts.google.com/o/oauth2/auth?response_type=id_token&client_id=63642243238-p046n51e1o6sahqjr4t81h1vjjlur5dg.apps.googleusercontent.com&redirect_uri=http://localhost&state=AMbdmDnjjRPDY1zeMLsagFUM3FRoOSe8lr8p5bAS7cQD-KJq7-CkO7Np8eaHpEzLH_NTynyqRVbqHy7qNAJMz0uxXVLtwEYx5jo6BYXJc7LPU4eFuO7pQ4X1X7ASfYFMoPu8GwGBbNwNVlX_0c3ZRsRNCpX-oEqD2XBGzFE51kO08WKQsATXQmy1ZpDHL_o6eI6iRgHo0qWOWKZP2d8_DWIXBGxonNbm-VhRkoI_1dGPbzvKg0eQ6b_m2BhrjHeV6X7MD6knPjfmyF7PVCqOrB3AyQ&scope=openid+https://www.googleapis.com/auth/userinfo.email&nonce=52d4d018f2709a96a480d9d5ef0c1f9467a8b1ec3f4ee9138fe71d3389a8104d&include_profile=true',
				providerId: 'google.com',
				sessionId: 'xmehXKbG_k7m72-UAmK28oGQm4M'
			}
		}
	}

	createUrlForOAuthSignWithFacebookInSuccess(): CreateUrlForOAuthSignInSuccessInterface {
		return {
			data: {
				kind: 'identitytoolkit#CreateAuthUriResponse',
				authUri: 'https://www.facebook.com/v8.0/dialog/oauth?response_type=token,granted_scopes&client_id=5494431743923464&redirect_uri=http://localhost&state=AMbdmDnscF5Wf9wVuDcLB5msJrguZ2sg0BY27800dRvWJCgTqNxsHSmfBe0n2bjg4abCJ2JI2WFBLoE5tG3KqMuEx9Hyr4JJVffaZhJZLCpaFoS-7vdCmJf7fqDNqrSA5dqWP09gi_cW91afYC0ov3WgEVraXGk_Ot4SfjbJwMqlA5jMGEj071FscGq-nO6RY9CL6T6fof-D-ZCmdNbjwpi6L7Ye0riR17q6EIwI93zb6kM8_qiytdI7sEb5lBLBmEn9Lwfntiu7dUKe1R3ltuPjtetYv1VxGxNa&scope=public_profile,email',
				providerId: 'facebook.com',
				sessionId: 'fI_QGYG-MO91XNHwopdxNQZwgEc'
			}
		}
	}

	createUrlForOAuthSignWithGitHubInSuccess(): CreateUrlForOAuthSignInSuccessInterface {
		return {
			data: {
				kind: 'identitytoolkit#CreateAuthUriResponse',
				authUri: 'https://github.com/login/oauth/authorize?response_type=token&client_id=69741b8c3fa7eeb4735a&redirect_uri=http://localhost&state=AMbdmDkPmLuDYVtpq8QWgazvE9GwWaq1p5XPA19aluGLcHH9HmdDFsbgesiaAoF_PXjJITMwpaeKQLrJ3bNaokuoVk4SIztlXSucxmArAAnskt4JP2rcNvZA4OcOmX8n5xBv9ml2DAsBfdJLIJfGXCbtc9-Zte334ZZyoazaROjDdCqKxgAXIDniXBUErl1DWiizLVApCzvXMXwY5yTN-HRl8IxZxFucpLqZNnkxLz_WHy2t6AuaZiojZ70RHJS7InrnlMi_p-IciZtP4CUywC_eHKdZ&scope=user:email',
				providerId: 'github.com',
				sessionId: 'UkHZVhw4cg5DnvlILtq7TpgZUwE'
			}
		}
	}

	createUrlForOAuthSignInIdentityProviderConfigNotFound(): AuthResponseErrorInterface {
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

	singInWithOAuthInvalidGoogleToken(): AuthResponseErrorInterface {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '400',
						title: 'Bad Request',
						detail: 'INVALID_IDP_RESPONSE : Unable to parse Google id_token: asdkpasd'
					}
				]
			}
		}
	}

	inviteUserSuccess(): string {
		return ''
	}

	inviteUserNoEmailProvided(): AuthResponseErrorInterface {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '422',
						title: 'Unprocessable Entity',
						detail: 'No email address provided'
					}
				]
			}
		}
	}

	resetPasswordSuccess(): string {
		return ''
	}

	resetPasswordNoEmailFound(): AuthResponseErrorInterface {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '422',
						title: 'Unprocessable Entity',
						detail: 'There is no user record corresponding to the provided email.'
					}
				]
			}
		}
	}

	verifyEmailNoUserFound(): AuthResponseErrorInterface {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '422',
						title: 'Unprocessable Entity',
						detail: 'There is no user record corresponding to the provided identifier.'
					}
				]
			}
		}
	}

	verifyEmailInvalidOobCode(): AuthResponseErrorInterface {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '400',
						title: 'Bad Request',
						detail: 'INVALID_OOB_CODE'
					}
				]
			}
		}
	}

	verifyEmailInvalidParams(): AuthResponseErrorInterface {
		return {
			data: null,
			errors: {
				errors: [
					{
						code: '422',
						title: 'Unprocessable Entity',
						detail: 'No newPassword, uid, or oobCode provided'
					}
				]
			}
		}
	}

}