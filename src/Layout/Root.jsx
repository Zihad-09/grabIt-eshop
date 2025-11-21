import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/SharedComponent/Header';
import Footer from '../Components/SharedComponent/Footer';

const Root = () => {
    return (
        <div>
            <Header/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Root;