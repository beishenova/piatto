import React from 'react';
import Header from '../Components/Header/Header';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default MainLayout;
