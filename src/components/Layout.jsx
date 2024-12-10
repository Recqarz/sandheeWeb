import React from 'react';
import HeaderTwo from './Header/HeaderTwo';
import { Outlet } from 'react-router-dom';
import FooterTwo from './Footer/FooterTwo';

const Layout = () => {


    return (
        <div >
            <HeaderTwo />
            <main>
                <Outlet />
            </main>
            <FooterTwo />
        </div>
    );
};

export default Layout;
