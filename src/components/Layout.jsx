import React from 'react';
import HeaderTwo from './Header/HeaderTwo';
import { Outlet, useLocation } from 'react-router-dom';
import FooterTwo from './Footer/FooterTwo';

const Layout = () => {
    const location = useLocation();


    const getBackgroundColor = () => {
        switch (location.pathname) {
            case '/contact':
                return 'red';
            default:
                return '#fff';
        }
    };

    return (
        <div>
            <HeaderTwo bgColor={getBackgroundColor()} />
            <main>
                <Outlet />
            </main>
            <FooterTwo />
        </div>
    );
};

export default Layout;
