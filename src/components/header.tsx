import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

import { useNavigate } from 'react-router-dom';

import imgDev from '../assets/img-dev.svg';

function Header(){

    const navigate = useNavigate();

    const items = [
        {
            label: 'Menu',
            command: () => navigate('/')
        },
        {
            label: 'Experiências',
            command: () => navigate('/experiencias')
        },
        {
            label: 'Formação',
            command: () => navigate('/formacao')
        },
        {
            label: 'projetos',
            command: () => navigate('/projetos')
        }
    ];

    const start = (
        <img src={imgDev} alt="Logo" style={{ width: 40, height: 40, marginRight: '10px' }} />
    );

    const end = (
        <Button className='bg-orange-500 border-none' label='Meu Currículo' icon='pi pi-file' />
    );

    return(
        <Menubar className='w-full bg-gray-900 border-none fixed top-0 left-0 p-3 z-1' model={items} start={start} end={end} />
    );
}

export default Header;