import React, { useEffect, useRef, useState } from 'react';
import banner from '../../assets/banner.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const cardsLoad = useLoaderData();
    const [cards, setCards] = useState(cardsLoad);
    const [show, setShow] = useState(true)
    const inputRef = useRef(null);
    const [difference, setDifferentData] = useState('s')
    
    const handleButton = () => {
        console.log(inputRef.current.value);
        setDifferentData(inputRef.current.value)
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${difference}`)
            .then(res => res.json())
            .then(data => setCards(data))
    }, [difference])

    return (
        <div>
            <div className='relative'>
                <img className='w-full h-[650px] object-cover' src={banner} alt="banner-img" />
                <div className='text-center absolute flex flex-col justify-center bg-black bg-opacity-70 top-0 left-0 inset-0'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='text-6xl text-white font-bold pb-3'>Taste Our Delicious</h1>
                        <h2 className='text-6xl font-bold text-white pb-4'>Best Foods</h2>
                        <p className='text-white text-sm lg:text-2xl lg:px-44'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou.</p>
                        <div className='md:w-1/2 md:mx-auto mx-5 relative mt-10'>
                            <div className='flex items-center'>
                                <MagnifyingGlassIcon className='w-6 absolute left-2 z-10'></MagnifyingGlassIcon>

                                <input ref={inputRef} className='w-full border-none py-3 px-10' type="text" placeholder='search any food' />

                                <button onClick={handleButton} className='btn absolute text-slate-800 font-bold hover:bg-orange-700 hover:text-white rounded-none px-10 right-0 bg-orange-500 border-none'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-center my-10 font-bold text-slate-800 text-6xl'>Your Favourite Food</h3>
            </div>
            <div className='text-center my-10'>
                <span>
                    <div className='grid md:grid-cols-2 gap-6 max-w-7xl mx-auto'>
                        {
                            show ? cards.meals.slice(0, 6).map(card => <Card card={card} key={card.idMeal}></Card>) : cards.meals.map(card => <Card card={card} key={card.idMeal}></Card>)

                        }
                    </div>
                    <div className='my-10'>
                        {
                            show ? <button onClick={() => setShow(!show)} className='btn btn-primary'>See More</button> : <button onClick={() => setShow(!show)} className='btn btn-primary'>See Less</button>
                        }
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Home;