class Balance {
  static #list = []

  constructor(amount = 0, sum, email, paysystem) {
    this.amount = amount
    this.sum = sum
    this.email = email
    this.paysystem = paysystem
    this.id = new Date().getTime()
  }

  static getList = () => {
    return Balance.#list.reverse().map((balance) => ({
      id: balance.id,
      sum: balance.sum,
    }))
  }

  static getById = (id) => {
    return this.#list.find((balance) => balance.id === id)
  }

  static reseiveBalance = (sum) => {
    return Balance.amount - sum
  }

  static sendBalance = (sum) => {
    return Balance.amount + sum
  }
}
