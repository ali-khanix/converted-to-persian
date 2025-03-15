import axios from 'axios'

export const getProducts = async () => {
  const res = await axios.get('/api/products')
  return res.data.docs
}

export const getCategories = async () => {
  const res = await axios.get('/api/categories')
  return res.data.docs
}
