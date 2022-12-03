import React from 'react';
import { Outlet } from 'react-router-dom';
import BrandFooter from './BrandShare/BrandFooter/BrandFooter';
import BrandNavbar from './BrandShare/BrandNavbar/BrandNavbar';

const Brand = () => {
    return (
        <div>
            <BrandNavbar></BrandNavbar>
            <Outlet></Outlet>
            <BrandFooter></BrandFooter>
        </div>
    );
};

export default Brand;