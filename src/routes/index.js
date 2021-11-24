import React from "react";
import { Route, Routes } from "react-router";
import AddNewMeal from "../pages/AddNewMeal";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/add" element={<AddNewMeal />} />
        </Routes>
    );
};

export default AppRoutes;
