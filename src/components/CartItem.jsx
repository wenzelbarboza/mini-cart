import React from 'react'
import { BiMinus, BiPlus } from "react-icons/bi"

const CartItem = ({ details, dispatch }) => {
    return (
        <article className=' p-100 flex flex-1'>
            <div className=' w-32 flex items-center justify-center'>
                <div className='h-12 w-12 rounded-l overflow-hidden bg-black'>
                    <img src={details.image} alt="image" className='' />
                </div>
            </div>
            <div className=' basis-64 flex flex-shrink items-center pl-5'>
                <div>
                    <h4 className='text-lg'>{details.name}</h4>
                    <span className='text-gray-500 text-sm'>${details.price}</span>
                </div>
            </div>
            <div className='flex-1 flex-shrink-0 flex justify-evenly items-center'>
                <BiMinus onClick={() => dispatch({ type: "DECREMENT", id: details.id })} />
                {details.qty}
                <BiPlus onClick={() => dispatch({ type: "INCREMENT", id: details.id })} />
            </div>
        </article>
    )
}

export default CartItem