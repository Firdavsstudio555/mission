import { useEffect } from "react"
import { api } from "../../service/api/api";
import { useEffect, useState } from "react";
import { api } from "../../service/api/api";

export function Dashboard() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await api.get("/recipe/get-all"); 
                setMeals(response.data);
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
        };

        fetchMeals();
    }, []);

    return (
        <div className="bg-white text-gr">
           <div className="ml-12">
           <div className="flex justify-between">
               <div className="grid">
                <h1 className="font-bold">Good morning, Oghenevwede!</h1>
                <p>What delicious meal are you craving today?</p>
               </div>
               <img src="/girl.png" alt="" />
            </div>
        <div className="flex justify-center ml-4 items-center">
            <div className='grid ml-32 mt-20 text-center'>
                    <img className='w-[150px] ml-12 ' src="/hamburger.png" alt="" />
                   <div>
                   <h1 className='text-[30px] font-bold'>Stir Fry Pasta</h1>
                   <p className='mt-5 w-60'>The in-house pasta and chicken by chef Moose</p>
                   <div className="flex justify-between mt-10">
                    <p>N 1,000.00</p>
                    <p className="text-lime-500">Add to cart</p>
                   </div>
                   </div>
            </div>
            <div className='grid ml-32 mt-20 text-center'>
                    <img className='w-[150px] ml-12 ' src="/gush.png" alt="" />
                   <div>
                   <h1 className='text-[30px] font-bold'>Stir Fry Pasta</h1>
                   <p className='mt-5 w-60'>The in-house pasta and chicken by chef Moose</p>
                   <div className="flex justify-between mt-10">
                    <p>N 1,000.00</p>
                    <p className="text-lime-500">Add to cart</p>
                   </div>
                   </div>
            </div>
            <div className='grid ml-32 mt-20 text-center'>
                    <img className='w-[150px] ml-12 ' src="/idk.png" alt="" />
                   <div>
                   <h1 className='text-[30px] font-bold'>Stir Fry Pasta</h1>
                   <p className='mt-5 w-60'>The in-house pasta and chicken by chef Moose</p>
                   <div className="flex justify-between mt-10">
                    <p>N 1,000.00</p>
                    <p className="text-lime-500">Add to cart</p>
                   </div>
                   </div>
            </div>
        </div>
        <div className="flex justify-center ml-4 items-center">
            <div className='grid ml-32 mt-20 text-center'>
                    <img className='w-[150px] ml-12 ' src="/lavash.png" alt="" />
                   <div>
                   <h1 className='text-[30px] font-bold'>Stir Fry Pasta</h1>
                   <p className='mt-5 w-60'>The in-house pasta and chicken by chef Moose</p>
                   <div className="flex justify-between mt-10">
                    <p>N 1,000.00</p>
                    <p className="text-lime-500">Add to cart</p>
                   </div>
                   </div>
            </div>
            <div className='grid ml-32 mt-20 text-center'>
                    <img className='w-[150px] ml-12 ' src="/cir.png" alt="" />
                   <div>
                   <h1 className='text-[30px] font-bold'>Stir Fry Pasta</h1>
                   <p className='mt-5 w-60'>The in-house pasta and chicken by chef Moose</p>
                   <div className="flex justify-between mt-10">
                    <p>N 1,000.00</p>
                    <p className="text-lime-500">Add to cart</p>
                   </div>
                   </div>
            </div>
            <div className='grid ml-32 mt-20 text-center'>
                    <img className='w-[150px] ml-12 ' src="/soup.png" alt="" />
                   <div>
                   <h1 className='text-[30px] font-bold'>Stir Fry Pasta</h1>
                   <p className='mt-5 w-60'>The in-house pasta and chicken by chef Moose</p>
                   <div className="flex justify-between mt-10">
                    <p>N 1,000.00</p>
                    <p className="text-lime-500">Add to cart</p>
                   </div>
                   </div>
            </div>
        </div>
           </div>
        </div>
    )
}

export default Dashboard