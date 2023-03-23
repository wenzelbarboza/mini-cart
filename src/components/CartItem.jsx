import React from 'react'

const CartItem = ({ details, dispatch }) => {
    return (
        <div className=' bg-blue-200 p-100 flex-1'>{JSON.stringify(details)}</div>
    )
}

export default CartItem