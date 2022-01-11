import { useEffect } from 'react'

import { Announcement } from '../components/Announcement'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import { Categories } from '../components/Categories'

import Commerce from '../utils/commerce'

const Home = () => {
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const products = await Commerce.products.list()
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  )
}

export default Home
