import { useEffect, useState } from 'react'

import { Product } from '@chec/commerce.js/types/product'

import Commerce from '../utils/commerce'

import {
  Announcement,
  Navbar,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
} from '../components'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const response = await Commerce.products.list()
      setProducts(response?.data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products products={products} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
