import React, { PropsWithChildren } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "@/componets/ui/Header";
import Footer from "@/componets/ui/Footer";



const MainLayout: React.FC<PropsWithChildren> = () => {
    const { pathname } = useLocation();
    const isMainPage = pathname === '/';

    return (
        <div className="flex">
            <div className={`flex h-[100vh] w-full flex-col`}>
                {isMainPage && <Header />}
                <main className="flex-1 overflow-hidden p-4 md:w-[calc(100%-var(--sidebar-width))] md:pl-4">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};
export default MainLayout;
