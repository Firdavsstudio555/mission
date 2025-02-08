import { TrophySpin } from 'react-loading-indicators';
import { useEffect, useState } from "react";
import api from '../../service/api/api';

export function Orders() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get('/orders');
                setOrders(response.data.orders);
                console.log(JSON.stringify(response.data.orders));
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="overflow-hidden text-gr font-bold text-[23px]">
            <h1 className="w-[2000px] mt-[65px]">Your Orders</h1>
            {loading ? (
                <div className="ml-[400px] mt-[150px]">
                    <TrophySpin color="#080612" size="medium" text="Loading..." textColor="#6b6767" />
                </div>
            ) : (
                <div className='flex justify-between flex-col'>
                    {orders?.map((order) => (
                        <div key={order._id} className='flex justify-between items-center border-b-2 mb-10'>
                            <div>
                                <h2>{order?._id}</h2>
                                <p>{order.created_at}</p>
                            </div>
                            <div>
                                {order.items.map((item) => (
                                    <div key={item.foodId._id}>
                                        <img className='w-28 rounded-full h-28 ml-96' src={item.foodId.image} alt="" />
                                        <h2 className='mr-96'>{item.foodId.name}</h2>
                                        <p className='mr-96'>{item.foodId.price}$</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders;