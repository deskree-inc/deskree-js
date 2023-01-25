export type AuthResponseErrorInterface = {
  data: null
  errors: {
    errors: [
      {
        code: string
        title: string
        detail: string
      }
    ]
  }
}

export type SignUpEmailInterface = {
  data: {
    uid: string
    email: string
    emailVerified: boolean
    disabled: boolean
    idToken: string
    refreshToken: string
    expiresIn: string
  }
}

export type CreateUrlForOAuthSignInSuccessInterface = {
  data: {
    kind: string
    authUri: string
    providerId: string
    sessionId: string
  }
}