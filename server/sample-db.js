const Product = require('./model/product')

class SampleDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        desciption: 'A large phone with out of the best screens',
        heading1: 'テキスト',
        heading2: 'text',
        heading3: 'tex',
        headingtext1: '',
        headingtext2: '',
        headingtext3: ''
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        desciption: 'A great phone with one of the best cameras',
        heading1: 'テキスト',
        heading2: 'text',
        heading3: 'tex',
        headingtext1: '',
        headingtext2: '',
        headingtext3: ''
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        desciption: '',
        heading1: 'テキスト',
        heading2: 'text',
        heading3: 'tex',
        headingtext1: '',
        headingtext2: '',
        headingtext3: ''
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 999,
        desciption: '',
        heading1: 'テキスト',
        heading2: 'text',
        heading3: 'tex',
        headingtext1: '',
        headingtext2: '',
        headingtext3: ''
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }
  
  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }
  // seeDb() {
  //   this.pushProductsToDb()
  // }
}

module.exports = SampleDb