'use client'
import Header from '@/components/Header'
import { addToCart, selectItems } from '@/redux/slices/cartSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../components/CheckoutProduct'

function page() {

    const items = useSelector(selectItems)


    return (
        <div>
            <Header />
            <div className='bg-gray-200 p-5 flex-col'>

                <main>
                    <div className='bg-white flex flex-col p-5 space-y-5'>
                        <div className='flex justify-between  border-b'>
                            <h1 className='text-3xl pb-4 flex'>{items?.length === 0 ? 'Your cart is empty' : 'Shopping cart'}
                            </h1>
                            <h5 className='self-end pb-1'>price</h5>
                        </div>

                        <div>

                            {Object.entries(items).map(([key, i]) => (
                                <div key={key}>
                                    <CheckoutProduct
                                        title={i.title}
                                        category={i.category}
                                        description={i.description}
                                        price={i.price}
                                        />
                                        
                                </div>
                            ))}

                        </div>

                    </div>
                    <br/>

                <div className='bg-white'>
                    subtotal (item{items?.length}) :
                    <div>ddd</div>
                    <div>ddd</div>
                    <div>ddd</div>
                    <div>ddd</div>
                    <div>ddd</div>
                    <button>
                        brocced to buy
                    </button>
                </div>
                
                </main>

            </div>
        </div>
    )
}

export default page