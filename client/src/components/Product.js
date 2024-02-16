import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import CurrencyInput from 'react-currency-input-field'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cartSlice'

function Product({ _id, title, category, description, price }) {

    const dispatch = useDispatch()

    const addItemToBasket = () => {

        const product = {
            _id, title, category, description, price
        }

        //sending the product as an action to the REDUX store 
        dispatch(addToCart(product))

    }
    return (
        <div className='relative flex flex-col max-w-sm border-gray-200 m-5 p-2 z-30 bg-white border'>


            <div>
                <img
                    width={200}
                    height={200}
                    objectiFit='contain'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGinp-BGf49U_ffenU1JUxs9yH6r6_fNF1g&usqp=CAU'
                    alt='Your Image Alt Text'
                />
            </div>

            <div className=''>
                <h1 className='text-gray-700 font-bold my-2'>
                    {title}
                </h1>
            </div>

            <div>
                <StarIcon className='h-5 my-1 text-yellow-500' />
            </div>

            <div>
                <h1 className='font-bold text-2xl'>

                    {price} $
                </h1>
                {/* 'need to change the currency depend on wchich country user loged from' */}
                <p className='text-sm my-1'>
                    100+ bought in past month
                </p>
            </div>

            <button
                className='bg-amber-300 rounded p-2 max-w-sm my-3'
                onClick={addItemToBasket}>
                add to cart
            </button>

            <p className='text-sm'>Get it as soon as tomorrow, 14 Jan
                Fulfilled by Amazon - FREE Shipping
            </p>
        </div>
    )
}

export default Product