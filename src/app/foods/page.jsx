// -------------------------------Start: 41_5 ---------------------------------------
// (1)st
import FoodCard from '@/components/FoodCard';
import React from 'react';

// const FoodsPage = () => {
// (2)st commit previous
const FoodsPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    // const foods = await res.json();
    // (4)st commit previous
    const data = await res.json();
    const foods = data.data;
    // (4)en then create FoodCard.jsx in components folder
    console.log(foods);
    // (2)en

    return (
        <div>
            {/* (3) */}
            <h2>Foods: {foods.length}</h2>
            {/* (9)st */}
            {/* {
                foods.map((food) => <FoodCard food={food} key={food.id}></FoodCard>)
            } */}
            {/* (9)en then in FoodCard.jsx file*/}
            {/* (12)st commit (9) then in FoodCard.jsx file*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    foods.map((food) => <FoodCard food={food} key={food.id}></FoodCard>)
                }
            </div>
            {/* (12)en */}
        </div>
    );
};

export default FoodsPage;
// (1)en
// ---------------------End:41_5-(1) to (13) --------------------------------
