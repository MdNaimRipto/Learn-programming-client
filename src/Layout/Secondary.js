import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import SideNav from '../Pages/Shared/SideNav/SideNav';
import { Outlet } from "react-router-dom";
import Footer from '../Pages/Shared/Footer/Footer';

const Secondary = () => {
    return (
        <div>
            <Header></Header>
            <div className='gridCard container mx-auto'>
                <SideNav></SideNav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Secondary;