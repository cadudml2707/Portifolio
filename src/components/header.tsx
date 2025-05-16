import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

import { useLocation, useNavigate } from 'react-router-dom';

import imgDev from '../assets/imagens/img-dev.svg';
import curriculo from '../assets/documentos/curriculo_carlos_eduardo.pdf';

export function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: String) => {
        if (location.pathname === path) {
            return 'border-bottom-2 border-cyan-600';
        }
        return 'border-gray-900';
    }

    const items = [
        {
            template: (<div className={`lg:text-white sm:text-gray-700 p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer ${isActive('/')}`}>Menu</div>),
            command: () => navigate('/')
        },
        {
            template: (<div className={`lg:text-white sm:text-gray-700 p-3 hover:bg-gray-800 cursor-pointer ${isActive('/experiencias')}`}>Experiências</div>),
            command: () => navigate('/experiencias')
        },
        {
            template: (<div className={`lg:text-white sm:text-gray-700 p-3 hover:bg-gray-800 cursor-pointer ${isActive('/projetos')}`}>Projetos</div>),
            command: () => navigate('/projetos')
        }
    ];

    const start = (
        <img src={imgDev} alt="Logo" style={{ width: 40, height: 40, marginRight: '10px' }} />
    );

    const end = (
        <a
            href={curriculo}
            download="Curriculo_Carlos_Eduardo.pdf"
            className='no-underline'
        >
            <Button className='bg-orange-500 border-none' label='Meu Currículo' icon='pi pi-file' />
        </a>
    );

    return (
        <Menubar className='w-full bg-gray-900 border-none fixed top-0 left-0 p-3 z-1 list-none gap-5' model={items} start={start} end={end} />
    );
}
