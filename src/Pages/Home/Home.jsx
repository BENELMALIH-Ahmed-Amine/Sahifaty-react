import React, { useContext } from 'react';
import Header from './Header';
import Main from './Main/Main';
import { Mycontext } from '../../Context';

const Home = () => {
    const { Books } = useContext(Mycontext)
        console.log(Books);
    return (
        <div className='w-[85%] h-full px-10 py-5 flex flex-col items-center gap-5'>
            <Header/>
            <Main/>
            
        </div>
    );
};

export default Home;