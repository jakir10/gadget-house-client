import React from 'react';
import OverView from '../../OwnSection/OverView';
import TopSupplier from '../../OwnSection/TopSupplier';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <OverView></OverView>
            <Inventories></Inventories>
            <TopSupplier></TopSupplier>
        </>
    );
};

export default Home;