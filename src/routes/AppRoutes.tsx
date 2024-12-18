import { Route, BrowserRouter, Routes } from "react-router-dom";

import Menu from './pages/menu';
import Formacao from './pages/formacao';
import Experiencias from './pages/experiencias';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Menu/>} path="/" />
                <Route element={<Formacao/>} path="/formacao" />
                <Route element={<Experiencias/>} path="/experiencias" />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;