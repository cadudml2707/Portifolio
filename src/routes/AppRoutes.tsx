import { Route, Routes } from "react-router-dom"; // Remova BrowserRouter daqui
import { Menu } from './pages/menu';
import { Experiencias } from './pages/experiencias';
import { Projetos } from './pages/projetos';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/experiencias" element={<Experiencias />} />
      <Route path="/projetos" element={<Projetos />} />
    </Routes>
  );
}