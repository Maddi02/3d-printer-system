import React from 'react';
import { RouterProvider } from 'react-router-dom';
import createRouter from "@/router/CreateRouter";


const AppRouter: React.FC = () => {
    return <RouterProvider router={createRouter()} />;
};

export default AppRouter;
