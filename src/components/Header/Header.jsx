import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-orange-500 py-5'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div className="logo">
                    <Link to={`/`} className='text-2xl font-bold'>
                        Tasty HUT
                    </Link>
                </div>
                <Link><button className='btn hover:text-white bg-warning border-none font-bold text-slate-800'>Sign Up</button></Link>
            </div>
        </nav>
    );
};

export default Header;