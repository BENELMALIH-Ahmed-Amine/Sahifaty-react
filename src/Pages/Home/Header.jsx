import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiChevronDown } from 'react-icons/hi';

const Header = () => {
    return (
        <header className='w-full h-fit flex justify-between'>
            <section  className='flex flex-col gap-5'>
                <h1 className='text-3xl font-bold'>Discover</h1>

                <div className='h-[60px] bg-white rounded-xl flex items-center p-3 gap-5'>
                    <div className='text-zinc-900 text-2sm  flex items-center gap-1 h-full'>Categorys <HiChevronDown /></div>
                    <div className="h-full flex items-center gap-3"><BiSearch className=''/><input type="text" className='w-58 h-full bg-amber-600text-sm' placeholder='What is your faforite fild?'/></div>
                    <button className='bg-zinc-300 py-1.5 px-7 rounded-sm hover:bg-zinc-400'>Search</button>
                </div>
            </section>

            <section className='w-fit h-fit flex gap-3'>
                <div className="w-[40px] h-[40px] bg-amber-50 rounded-full relative">
                    <img className='w-full rounded-full' src="" alt="" />
                    <div className='w-[10px] h-[10px] bg-zinc-400 rounded-full absolute right-0'></div>
                </div>
                <h6 className='text-white flex items-center ga-1'>Name LastName <HiChevronDown /></h6>
            </section>
        </header>
    );
};

export default Header;