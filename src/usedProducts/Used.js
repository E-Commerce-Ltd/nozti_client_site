import React from 'react';
import { Outlet } from 'react-router-dom';
import UsedFooter from './UsedShared/UsedFooter/UsedFooter';
import UsedNavbar from './UsedShared/UsedNavbar/UsedNavbar';

const Used = () => {
    return (
        <div>
            <UsedNavbar></UsedNavbar>
            <Outlet></Outlet>
            <UsedFooter></UsedFooter>
        </div>
    );
};

export default Used;