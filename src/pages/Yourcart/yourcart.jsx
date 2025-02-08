import React, { useEffect, useState } from "react";
import api from "../../service/api/api";
import { TrophySpin } from 'react-loading-indicators';

export function YourCart() {
    const [cart, setCart] = useState({});
    const [loading, setLoading] = useState(false);
    const [isOrdering, setIsOrdering] = useState(false);

    useEffect(() => {
        const fetchCart = async () => {
            setLoading(true);
            try {
                const response = await api.get('/cart');
                setCart(response.data);
            } catch (error) {
                console.error('Error fetching cart:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);


    const handleMakeOrder = async () => {
        try {
            setIsOrdering(true)
            const response = await api.post('/order');
            console.log(response);
            setCart({})
        } catch (error) {
            console.error('Error making order:', error);
        }
    };

    // console.log(cart[0])
    return (
        <div className="overflow-hidden text-gr font-bold text-[23px]">
            <h1 className="w-[2000px] mt-[65px]">Your Cart</h1>
            <div className="flex justify-around">
                <h1>ITEMS</h1>
            </div>
            {loading ? (
                <div className="ml-[510px] mt-[150px]">
                    <TrophySpin color="#080612" size="medium" text="Loading..." textColor="#6b6767" />
                </div>
            ) : (
                <div className="grid">
                    {cart?.items?.map(({ foodId: { name, price, image, availableCount, } }, index) => (
                        <div key={index} className=' flex justify-between border-black p-5'>
                            <div className="w-96">
                                <img className='w-[100px] ml-12 h-[100px]' src={image} alt={name} />
                                <h1 className='text-[20px] font-bold mt-8'>{name}</h1>
                                <div className="flex justify-between mt-10">
                                    <p>{price}$</p>
                                    <p>Availble: {availableCount}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-[20px] bg-gr p-3 text-white h-14 rounded-xl ml-3">+</button>
                                <p className="text-[20px] bg-gr p-3 text-white h-14 rounded-xl ml-3">1</p>
                                <button className="text-[20px] bg-gr p-3 text-white h-14 rounded-xl ml-3">-</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-20">
                <p>Total items: <span className="font-bold text-gr text-[20px]">{cart?.totalItems}</span></p>
                <p>Total amount: <span className="font-bold text-gr text-[20px]">{cart?.totalAmount}$</span></p>
            </div>
            <button className="text-white bg-gr w-[800px] h-16 text-center ml-[210px] mt-10 mb-10 hover:bg-black duration-700" onClick={handleMakeOrder}>
                {
                    isOrdering ? "Ordering..." : "Make Order"
                }
            </button>
        </div>
    );
}

export default YourCart;