export class EmailAlreadyExist extends Error {
  constructor(paramName: string) {
    super(`Email: ${paramName}`)
    this.name = 'Email_already_exist'
  }
}
