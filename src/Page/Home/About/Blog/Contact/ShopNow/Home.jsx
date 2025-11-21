import React from 'react';
import Hero from './HomeComponent/Hero';
import HomeCategory from '././HomeComponent/HomeCategory';
import Popularproducts from './HomeComponent/PopularProducts/Popularproducts';
import LatestExclusive from './HomeComponent/LatestExclusive';
import NewProducts from './HomeComponent/NewProducts';
import Collection from './HomeComponent/Collection';
import Support from './HomeComponent/Support';
const Home = () => {
    return (
        <div>
            <Hero/>
            <HomeCategory/>
            <Popularproducts/>
            <LatestExclusive/>
            <NewProducts/>
            <Collection/>
             <Support/>
        </div>
    );
};

export default Home;