import React from 'react';
import Images from '../../../Constans/Images';

const Book = ({ cover, author }) => {
    return (
        <article>
            <section className="w-[150px] h-[190px] bg-amber-50"><img className="w-full h-full" src={Images[cover]} alt="The book's image." /></section>
            <h3 className='w-[150px]'>Author: {author.split(",")[0]}</h3>
        </article>
    );
};

export default Book;