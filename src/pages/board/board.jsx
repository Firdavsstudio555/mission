
function Board() {
    return (
       <div className="text-black font-bold p-10">
        <img className="w-[350px] h-[350px] ml-[320px]" src="/cup.png" alt="" />
        <div className="text-center">
            <h1 className="text-[25px] mt-10">Blueberry Toasts and smoothie</h1>
            <p className="mt-10">Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel wow. The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.</p>
        </div>
        <div className="text-gr text-[25px] flex justify-around mt-10">
            <h1>NGN 2000.00</h1>
            <h1>10-20 Mins</h1>
            <h1>10 Pcs Avail</h1>
        </div>
        <div className="flex justify-around mt-20">
            <div className="flex text-gr">
                <h1 className="bg-gg ml-3 text-center p-4 font-bold text-[20px]">-</h1>
                <h1 className="bg-gg ml-3 text-center p-4 font-bold text-[20px]">0</h1>
                <h1 className="bg-gg ml-3 text-center p-4 font-bold text-[20px]">+</h1>
            </div>
            <button className="text-white bg-gr p-5  hover:bg-black duration-700">Add to cart</button>
        </div>
       </div>
    )
}


export default Board