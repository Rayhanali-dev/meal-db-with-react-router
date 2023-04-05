import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CardDetails = () => {
    const cardDetails = useLoaderData();
    console.log(cardDetails.meals[0]);
    const { strMealThumb, strInstructions, strMeal, strCategory, strArea, strYoutube
    } = cardDetails.meals[0];
    
    const navigate = useNavigate();
    const handleBackBtn = () => {
        navigate(-1)
    }

    return (
        <div className='max-w-7xl mx-auto my-32'>
            <div className="flex items-center shadow-xl">
                <figure className='w-2/4'>
                    <img src={strMealThumb} alt="Album" />
                </figure>
                <div className="card-body w-2/4">
                    <h2 className="card-title text-4xl font-bold mb-5">Name: {strMeal}</h2>
                    <p className='text-2xl flex-grow-0'><span className='font-bold'>Instructions:</span> {strInstructions.substring(0, 300)}...</p>
                    <p className='text-2xl flex-grow-0'><span className='font-bold'>Category:</span> {strArea}</p>
                    <p className='text-2xl flex-grow-0'><span className='font-bold'>Area:</span> {strCategory}</p>
                    <p className='text-2xl flex-grow-0'><span className='font-bold'>YouTube:</span> <a href={strYoutube}>{strYoutube}</a></p>
                    <div className="card-actions justify-end">
                        <button onClick={handleBackBtn} className="btn btn-primary">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;