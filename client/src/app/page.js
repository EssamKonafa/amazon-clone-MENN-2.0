'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductInfo from '../components/ProductInfo'

const Page = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/products')
        const fetchedData = await response.json()
        setProducts(fetchedData)
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className=''>
      <Header />

      <div className='max-w-screen-2xl mx-auto'>
        <Banner />
      </div>

      <div className='bg-gray-50'>
        <ProductInfo products={products}/>
      </div>

    </div>
  )
}

export default Page