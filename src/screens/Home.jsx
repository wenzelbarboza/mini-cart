import React, { useReducer } from 'react'
import CartItem from '../components/CartItem';

const contentUrl = "https://imgbox.com/gallery/edit/0EjyFD0FhY/A0hKmbgfCn2WImvr"

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
                        qty: item.qty - 1
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
            image: "https://thumbs2.imgbox.com/93/75/OH86wvv9_t.png",
            qty: 1,
            price: 1000
        },
        {
            id: 2,
            name: "Samsung",
            image: "https://thumbs2.imgbox.com/f9/40/LFOvpt6N_t.jpg",
            qty: 1,
            price: 750
        },
        {
            id: 3,
            name: "Google pixel",
            image: "https://thumbs2.imgbox.com/40/c4/zsfvkuoH_t.jpg",
            qty: 1,
            price: 700
        },
        {
            id: 4,
            name: "Nothing phone",
            image: "https://thumbs2.imgbox.com/d2/22/TTkhbRp2_t.jpeg",
            qty: 1,
            price: 500
        }
    ])

    return (
        <div className='w-[30rem] h-[30rem]  bg-gray-100 rounded shadow-lg p-2 flex flex-col'>
            <div className=' flex flex-wrap flex-col flex-1'>
                {
                    state.map(item => {
                        return <CartItem details={item} dispatch={dispatch} />
                    })
                }
            </div>
            <div className='h-20 border-t-2 border-t-gray-500'>total</div>
        </div>
    )
}

export default Home