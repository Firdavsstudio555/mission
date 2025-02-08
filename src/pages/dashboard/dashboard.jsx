import { useEffect, useState } from "react";
import api from "../../service/api/api";
import { TrophySpin } from 'react-loading-indicators';
import { Foods } from "./components/foods";

export function Dashboard() {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await api.get("/foods");
                setFoods(response.data);
            } catch (error) {
                console.error("Error fetching foods:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, []);

    return (
        <div className="bg-white text-gr">
            <div className="mt-12">
                <div className="flex justify-between mb-16">
                    <img className="mr-5" src="/girl.png" alt="User avatar" />
                    <div className="grid mr-7">
                        <h1 className="font-bold">Good morning, Oghenevwede!</h1>
                        <p>What delicious foods are you craving today?</p>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-wrap gap-20">
                    {loading ? (
                        <div className="ml-[400px] mt-[150px]">
                            <TrophySpin color="#080612" size="medium" text="Loading..." textColor="#6b6767" />
                        </div>
                    ) : (
                        foods.map(food => (
                            <Foods key={food._id} image={food.image} name={food.name} description={food.description} price={food.price} id={food._id} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}