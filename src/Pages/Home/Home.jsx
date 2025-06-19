import React from 'react';
import Header from './Header';
import Main from './Main';

const Home = () => {
    return (
        <div className='w-[85%] h-full px-15 pt-10 flex justify-center'>
            <Header/>
            {/* <Main/> */}
        </div>
    );
};

export default Home;