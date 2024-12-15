import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from "@/componets/layout/MainLayout";
import HomePage from "@/pages/Home/HomePage";

const createRouter = () => {

    return createBrowserRouter(
        createRoutesFromElements(
            <>
                    <>
                        <Route element={<MainLayout />}>
                            <Route
                                path="/"
                                element={<HomePage />}
                            />
                        </Route>
                    </>
                )
            </>,
        ),
    );
};

export default createRouter;
