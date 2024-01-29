const products = []

module.exports = class Product {
  constructor(t){
    this.tittle = t
  }

  save(){
    products.push(this)
  }

  static fetchAll(){
    return products
  }
}