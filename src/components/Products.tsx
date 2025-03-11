import { useEffect, useState } from 'react'
import { getProducts } from '@/utils/api'
import { Button } from './ui/button'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-red-500">
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <Button>اضافه به سبد</Button>
        </div>
      ))}
    </div>
  )
}

export default Products
