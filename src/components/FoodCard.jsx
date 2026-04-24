// // -------------------------------Start: 41_5 ---------------------------------------
// // (5)st
// import React from 'react';

// // const FoodCard = () => {
// // (10)commit previous
// const FoodCard = ({ food }) => {
//     // (13)st
//     const { dish_name } = food;
//     return (
//         // <div>

//         // </div>
//         // (7)st commit previous and copy from daisyUI:Card with badge
//         // <div className="card bg-base-100 w-96 shadow-sm">
//         // (11)commit previous then in page.jsx file in foods folder
//         <div className="card bg-base-100 shadow-sm">
//             <figure>
//                 {/* (8)st commit (8)*/}
//                 {/* <img
//                     src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                     alt="Shoes" /> */}

//                 {/* (8)en then in page.jsx file in foods folder*/}
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title">
//                     {/* Card Title */}
//                     {/* (14)commit previous. and then this folder */}
//                     {dish_name}
//                     <div className="badge badge-secondary">NEW</div>
//                 </h2>
//                 <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//                 <div className="card-actions justify-end">
//                     <div className="badge badge-outline">Fashion</div>
//                     <div className="badge badge-outline">Products</div>
//                 </div>
//             </div>
//         </div>
//         // (7)en
//     );
// };

// export default FoodCard;

// // (5)en then in globals.css
// // ---------------------End:41_5-(1) to (13) --------------------------------
// -------------------------------Start: 41_6 ---------------------------------------
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const FoodCard = ({ food }) => {

    // const { dish_name } = food;
    // (1)commit previous
    // const { dish_name, image_link } = food;
    // (6)
    // const { dish_name, image_link, category, price } = food;
    // (13)
    const { id, dish_name, image_link, category, price } = food;
    return (

        <div className="card bg-base-100 shadow-sm">
            <figure>
                {/* (2)st */}
                <Image src={image_link}
                    alt={dish_name}
                    width={200}
                    height={200}>
                </Image>
                {/* (2)en then in next.config.mjs file */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">

                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                {/* (7)st */}
                <p><small>Category: {category}</small></p>
                <p>Price: $ {price}</p>
                {/* (7)en */}

                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    {/* (8)st */}
                    {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                    {/* (8)en */}

                    {/* (9)st commit (8) from daisyUi: button */}
                    <button className="btn btn-success">Add to Cart</button>
                    {/* <button className="btn btn-warning">Show Details</button> */}
                    {/* (14)st commit previous */}
                    <Link href={`/foods/${id}`}>
                        <button className="btn btn-warning">Show Details</button>
                    </Link>
                    {/* (14)en then (start: 40_7) in page.jsx file in [foodId] folder*/}

                    {/* (9)en then create page.jsx file creating [foodId] folder in foods folder  */}
                </div>
            </div>
        </div>

    );
};

export default FoodCard;

// ---------------------End:41_6-(1) to (13) --------------------------------
