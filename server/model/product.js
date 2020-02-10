const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    // auther: ObjectId,
    coverImage: String,
    name: {type: String, required: true },
    price: Number,
    desciption: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String
  });

  module.exports = mongoose.model('Product', ProductSchema)

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;
// // const ObjectId = Schema.ObjectId;

// const ProductSchema = new Schema({
//   // auther: ObjectId,
//   coverImage: String,
//   name: {type: String, required: true },
//   price: Number,
//   desciption: String,
//   heading1: String,
//   heading2: String,
//   heading3: String,
//   headingtext1: String,
//   headingtext2: String,
//   headingtext3: String
// });

// module.exports = mongoose.model('Product', ProductSchema);