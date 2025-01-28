export function YourCart() {
    return (
        <div className="overflow-hidden text-gr font-bold text-[23px]">
            <h1 className="w-[2000px] mt-[65px]">Your Cart</h1>
            <div className="flex justify-around">
                <h1>Item</h1>
                <div className="flex">
                    <h1 className="ml-10">Qty</h1>
                    <h1 className="ml-10">Unit Price</h1>
                    <h1 className="ml-10">Sub-total</h1>
                </div>
            </div>
            <div className="grid">
                <div className="flex justify-between mt-10">
                    <div className="flex justify-around">
                        <img className="w-[150px]" src="/gush.png" alt="" />
                        <div className="grid ml-[80px]">
                            <h1>Stir Fry Pasta</h1>
                            <p className="text-red-700">Remove</p>
                        </div>
                    </div>
                    <div className="flex mr-[230px]">
                        <h1 className="ml-10">3</h1>
                        <h1 className="ml-10">N 1,000.00</h1>
                        <h1 className="ml-10">N 3,000.00</h1>
                    </div>
                </div>
                <div className="flex justify-between mt-10">
                    <div className="flex justify-around">
                        <img className="w-[150px]" src="/gush.png" alt="" />
                        <div className="grid ml-[80px]">
                            <h1>Stir Fry Pasta</h1>
                            <p className="text-red-700">Remove</p>
                        </div>
                    </div>
                    <div className="flex mr-[230px]">
                        <h1 className="ml-10">3</h1>
                        <h1 className="ml-10">N 1,000.00</h1>
                        <h1 className="ml-10">N 3,000.00</h1>
                    </div>
                </div>
                <div className="flex justify-between mt-10">
                    <div className="flex justify-around">
                        <img className="w-[150px]" src="/gush.png" alt="" />
                        <div className="grid ml-[80px]">
                            <h1>Stir Fry Pasta</h1>
                            <p className="text-red-700">Remove</p>
                        </div>
                    </div>
                    <div className="flex mr-[230px]">
                        <h1 className="ml-10">3</h1>
                        <h1 className="ml-10">N 1,000.00</h1>
                        <h1 className="ml-10">N 3,000.00</h1>
                    </div>
                </div>
                <div className="flex justify-between mt-10">
                    <div className="flex justify-around">
                        <img className="w-[150px]" src="/gush.png" alt="" />
                        <div className="grid ml-[80px]">
                            <h1>Stir Fry Pasta</h1>
                            <p className="text-red-700">Remove</p>
                        </div>
                    </div>
                    <div className="flex mr-[230px]">
                        <h1 className="ml-10">3</h1>
                        <h1 className="ml-10">N 1,000.00</h1>
                        <h1 className="ml-10">N 3,000.00</h1>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <p>Total:   <span className="font-bold text-gr text-[20px]">N 30,000.00</span></p>
            </div>
            <button className="text-white bg-gr w-[800px] h-16 text-center ml-[210px] mt-10 mb-10 hover:bg-black  duration-700">Checkout</button>
        </div>
    )
}

export default YourCart