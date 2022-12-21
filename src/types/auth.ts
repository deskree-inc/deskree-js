export type AuthClientDataType = {
  signUpWithEmailAndPassword(email: string, password: string): any
  signInWithEmailAndPassword(email: string, password: string): any
}