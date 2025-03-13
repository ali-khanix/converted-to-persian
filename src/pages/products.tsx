import { GetServerSideProps } from 'next'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

import { useEffect, useState } from 'react'
import { getProducts } from '@/utils/api'

import Image from 'next/image'
import Layout from './layout'

interface Product {
  title: string
  id: string
  name: string
  price: number
  description: string
  images?: {
    url: string
  }
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = async () => {
        const data = await getProducts()
        setProducts(data)
        setLoading(false)
      }
      fetchProducts()
    }, 2000)
  }, [])

  if (loading) return <LoadingSpinner />
  if (products.length === 0) return <p>No products found</p>

  return (
    <Layout>
      <div className="bg-gray-50 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white 
          border-2 border-gray-900 p-5 shadow rounded-md"
          >
            {product.images?.url ? (
              <Image
                src={product.images.url}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-md mb-2"
                unoptimized
              />
            ) : (
              <div className="h-[300px] bg-gray-200 rounded-md flex items-center justify-center mb-2">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">قیمت: {product.price.toLocaleString('fa-IR')} تومان</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  try {
    const response = await getProducts()
    let product = response.data

    // If product is undefined, set it to null.
    if (!product) {
      product = null
    }

    // Alternatively, for each property that might be undefined, set a default:
    if (product) {
      product.title = product.title ?? ''
      product.description = product.description ?? ''
      product.image = product.image ?? null
      // ...do this for any property that might be undefined
    }

    return { props: { product } }
  } catch (error) {
    console.error('Error fetching product:', error)
    return { props: { product: null } }
  }
}

export default ProductsPage
