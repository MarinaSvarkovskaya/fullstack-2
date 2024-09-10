class User {
  static #list = []

  constructor(email, password) {
    this.email = email
    this.password = password
    this.id = new Date().getTime()
  }

  static add = (user) => {
    this.#list.push(user)
  }

  static getList = () => {
    this.#list
  }

  static getById = (id) => {
    this.#list.find((user) => user.id === id)
  }

  static updateById = (id, email, password) => {
    const user = User.getById(id)

    if (user) {
      if (email) user.email = email
      if (password) user.password = password
      return true
    } else {
      return false
    }
  }
}
