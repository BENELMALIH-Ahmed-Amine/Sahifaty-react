import React, { useContext } from 'react';
import Book from './Book';
import { Mycontext } from '../../../Context';

const Main = () => {
    const { AllBooks } = useContext(Mycontext)

    return (
        <main className='w-full p-2 flex flex-wrap gap-2'>
            {
                AllBooks.map((b) => (
                    <>
                        <Book cover={b.cover} author={b.author}/>
                    </>
                ))
            }
        </main>
    );
};

export default Main;