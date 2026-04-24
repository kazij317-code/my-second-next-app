// // -------------------------------Start: 41_6 ---------------------------------------
// // (10)st
// import React from 'react';

// // const FoodDetailPage = () => {
// // (11)st
// const FoodDetailPage = async ({ params }) => {
//     const { foodId } = await params;
//     // (11)en
//     return (
//         <div>
//             {/* (12) then in FoodCard.jsx file*/}
//             <h2>Show details of food: {foodId}</h2>
//         </div>
//     );
// };
// export default FoodDetailPage;
// // (10)en
// // ---------------------End:41_6-(1) to (13) --------------------------------
// // -------------------------------Start: 41_7 ---------------------------------------

// import Image from 'next/image';
// import React from 'react';

// const FoodDetailPage = async ({ params }) => {

//     const { foodId } = await params;
//     // (1)st
//     const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
//     const data = await res.json();
//     // const food = data.data
//     // (2)commit previous
//     const { id, dish_name, image_link } = data.data
//     // console.log('food in food detail page', food);
//     // (1)en
//     return (
//         <div>
//             <h2>Show details of food: {foodId}</h2>
//             {/* (3)st */}
//             <h3 className='text-3xl'>{dish_name}</h3>
//             <Image src={image_link}
//                 alt={dish_name}
//                 width={200}
//                 height={200}>
//             </Image>
//             {/* (3)en then create loading.jsx file in foods folder */}

//         </div>
//     );
// };
// export default FoodDetailPage;

// // ---------------------End:41_7-(1) to (13) --------------------------------
// -------------------------------Start: 41_8 ---------------------------------------
import Image from 'next/image';
import React from 'react';

const FoodDetailPage = async ({ params }) => {

    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();

    // const { id, dish_name, image_link } = data.data
    // (1)st previous
    // const { id, dish_name, image_link, main_ingredients } = data.data
    // (5)commit previous and (3)
    const { id, dish_name, image_link, main_ingredients, approximate_nutrition_per_serving } = data.data
    // (3)st
    // const nutrition = {
    //     calories: "550-750 kcal",
    //     protein: "35-45 g",
    //     carbohydrates: "60-80 g",
    //     fat: "20-30 g",
    //     fiber: "5-8 g"
    // };
    // (3)en


    return (
        <div>
            <h2>Show details of food: {foodId}</h2>

            <h3 className='text-3xl'>{dish_name}</h3>
            <Image src={image_link}
                alt={dish_name}
                width={200}
                height={200}>
            </Image>
            {/* (2)st */}
            <h2 className="text-2xl">Ingredient:</h2>
            <ul className="list-disc">
                {/* for array: */}
                {   
                    main_ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }

            </ul>
            {/* (2)en */}

            {/* (4)st */}
            <div>
                <h2 className="text-2xl">Nutrition Per Serving:</h2>
                {/* (6)st */}
                {/* <p>Calories: {nutrition.calories}</p>
                <p>Protein: {nutrition.protein}</p>
                <p>Carbs: {nutrition.carbohydrates}</p>
                <p>Fat: {nutrition.fat}</p>
                <p>Fiber: {nutrition.fiber}</p> */}
                {/* (6)en */}
                {/* (7)st commit (6): for object */}
                <p>Calories: {approximate_nutrition_per_serving.calories}</p>
                <p>Protein: {approximate_nutrition_per_serving.protein}</p>
                <p>Carbs: {approximate_nutrition_per_serving.carbohydrates}</p>
                <p>Fat: {approximate_nutrition_per_serving.fat}</p>
                <p>Fiber: {approximate_nutrition_per_serving.fiber}</p>
                {/* (7)en */}
            </div>
            {/* (4)en */}
        </div>
    );
};
export default FoodDetailPage;

// ---------------------End:41_8-(1) to (13) --------------------------------
