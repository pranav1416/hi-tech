import mongoose from 'mongoose'

const prodSchema = new mongoose.Schema({
  id: { type: String, required: true },
  categories: { type: String, required: true },
  imageURLs: { type: String, required: true },
  upc: { type: Number, required: true },
})
const Prod = mongoose.model('Prod', prodSchema)

export default Prod
