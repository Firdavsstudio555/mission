import api from "../../../../service/api/api"

export const Foods = ({ image, name, description, price, id }) => {
    const HandleAddToCart = async (event) => {
        event.preventDefault();
        try {
            const body = {
                "foodId": id,
                "quantity": 1
            }

            const response = await api.post('/add-cart', JSON.stringify(body));
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='text-center border-[1px] border-black p-5 h-[390px] '>
            <img className='w-[150px] ml-12 rounded-full h-[150px]' src={image} alt="" />
            <div className="mt-5">
                <h1 className='text-[20px] font-bold'>{name}</h1>
                <p className='mt-5 w-60'>{description}</p>
                <div className="flex justify-between mt-10">
                    <p>${price}</p>
                    <button onClick={HandleAddToCart} className="text-lime-500">Add to cart</button>
                </div>
            </div>
        </div>
    )
}