import { GetServerSideProps } from 'next'
import Head from 'next/head'

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

const ProductsPage = ({ product }: { product: Product }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  if (loading) return <p>Loading...</p>
  if (products.length === 0) return <p>No products found</p>

  return (
    <Layout>
      <Head>
        <title>{product.title} | My Store</title>
        <meta name="description" content={product.description} />
        <meta property="og:image" content={product.images?.url} />
      </Head>
      <div className="bg-gray-50 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white 
          border-2 border-gray-900 p-5 shadow rounded-md"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
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
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await getProducts()
  return { props: { product: data } }
}

export default ProductsPage
