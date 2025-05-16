import { Route, HashRouter, Routes } from "react-router-dom";

import { Menu } from './pages/menu';
import { Experiencias } from './pages/experiencias';
import { Projetos } from './pages/projetos';

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Menu/>} path="/" />
                <Route element={<Experiencias/>} path="/experiencias" />
                <Route element={<Projetos/>} path="/projetos"/>
            </Routes>
        </HashRouter>
    );
}
