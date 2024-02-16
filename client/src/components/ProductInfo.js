'use client'
import React from 'react'
import Product from './Product'

function ProductInfo({ products }) {


    return (
        <div className='flex justify-around grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-80 mx-auto'>
            {products.map(({ _id, title, category, description, price }) => (
                <Product
                    key={_id}
                    title={title}
                    category={category}
                    description={description}
                    price={price}
                />
            ))}
        </div>

    )
}

export default ProductInfo