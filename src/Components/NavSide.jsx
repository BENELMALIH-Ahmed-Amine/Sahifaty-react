import React from 'react';
import { BiInfoCircle, BiSolidCategory } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const NavSide = () => {
    return (
        <nav className='w-[15%] h-full rounded-l-3xl p-7 flex justify-center'>
            <div className='w-full flex flex-col gap-15'>
                <h1 className='text-center font-black text-2xl'>Sahifaty</h1>

                <article className='flex flex-col gap-20'>
                    <ul className='flex flex-col gap-5'>
                        <Link to='/ '>
                            <li className='py-3 pl-2 gap-2.5 flex items-center hover:bg-zinc-300'><HiHome/> Home</li>
                        </Link>
                        <li className='py-3 pl-2 gap-2.5 flex items-center hover:bg-zinc-300'><BiSolidCategory /> Categorys</li>
                        <li className='py-3 pl-2 gap-2.5 flex items-center hover:bg-zinc-300'><FaStar/> Favorite</li>
                        <li className='py-3 pl-2 gap-2.5 flex items-center hover:bg-zinc-300'><BiInfoCircle/> About</li>
                    </ul>

                    <section className='flex flex-col items-center'>
                        <div className='w-[90%] h-[1px] bg-black mb-3'></div>

                        <button type="submit">Log In</button>
                        <button type="button">Help</button>
                    </section>
                </article>
            </div>
        </nav>
    );
};

export default NavSide;