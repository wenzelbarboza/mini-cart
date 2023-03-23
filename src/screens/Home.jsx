import React, { useReducer } from 'react'
import CartItem from '../components/CartItem';

const reducer = (state, action) => {

    switch (action.type) {
        case "INCREMENT":
            return state.map((item) => {
                if (item.id == action.id) {
                    return {
                        ...item,
                        qty: item.qty + 1
                    }
                }
                return item;
            })
            break;

        case "DECREMENT":
            const searchItem = state.find(item => item.id == action.id)
            if (searchItem.qty == 1)
                return state.filter(item => item.id !== action.id)
            return state.map(item => {
                if (item.id == action.id) {
                    return {
                        ...item,
                        qty: item.qty + 1
                    }
                }
                return item
            })

        default:
            return state
    }
}

const Home = () => {

    const [state, dispatch] = useReducer(reducer, [
        {
            id: 1,
            name: "iphone",
            image: "link",
            qty: 1,
            price: 1000
        },
        {
            id: 2,
            name: "Samsung",
            image: "link",
            qty: 1,
            price: 750
        },
        {
            id: 3,
            name: "Google pixel",
            image: "link",
            qty: 1,
            price: 700
        },
        {
            id: 4,
            name: "Nothing phone",
            image: "link",
            qty: 1,
            price: 500
        }
    ])

    return (
        <div className=' w-[30rem] h-[30rem] bg-gray-100 rounded shadow-lg p-2 flex flex-wrap'>
            {
                state.map(item => {
                    return <CartItem details={item} dispatch={dispatch} />
                })
            }
        </div>
    )
}

export default Home