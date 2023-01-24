export type AuthClientDataType = {
  signUpEmail(email: string, password: string): any
  signInEmail(email: string, password: string): any
  createUrlForOAuthSignIn(providerId: string, callBackUri: string): any
  signInOAuth(sessionId: string, providerId: string, callBackUri: string, token: string, code: string): any
  inviteUser(email: string): any
  resetPassword(email: string): any
  verifyEmail(oobCode: string, uid: string): any
  verifyPasswordReset(oobCode: string, newPassword: string): any
  verifyInvite(oobCode: string, newPassword: string, uid: string): any
  updateEmail(email: string): any
  fetchEmailProviders(email: string): any
  refreshToken(refresh_token: string): any
  deleteAccount(): any
  getRoles(): any
}