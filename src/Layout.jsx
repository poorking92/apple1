import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import {Outlet} from 'react-router-dom'
import Iphone15pro from  '@/product/Iphone15pro';

const Layout = () => {
    return (
        <div>
        <Header />
        <main><Outlet /></main>
        <Iphone15pro/>
        <Footer />
      </div>
    );
};

export default Layout;