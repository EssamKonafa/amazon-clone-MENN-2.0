import { removeFromCart } from '@/redux/slices/cartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function CheckoutProduct({ _id, title, category, description, price }) {

    const dispatch = useDispatch()
    const removeProductFromBasket = ()=>{
        dispatch(removeFromCart({_id}))
    }
    return (

        <div className='flex  justify-between'>
            <div>
                <div className='text-2xl'>
                    {title}
                </div>
                <button onClick={removeProductFromBasket}>
                    delete
                </button>
            </div>
            <div className='text-1xl font-bold'>
                {price}
            </div>
        </div>
    )
}

export default CheckoutProduct