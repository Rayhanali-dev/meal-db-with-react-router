import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    console.log(props);
    const {strMeal, strMealThumb, strInstructions, idMeal} = props.card
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p className='text-left'>{strInstructions.slice(0, 130)}...</p>
                <Link to={`/cardDetails/${idMeal}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;