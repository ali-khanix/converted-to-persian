import axios from 'axios'

export const getProducts = async () => {
  const res = await axios.get('http://localhost:3000/api/products')
  return res.data.docs
}

export const getCategories = async () => {
  const res = await axios.get('http://localhost:3000/api/categories')
  return res.data.docs
}
