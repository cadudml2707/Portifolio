import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

import { useNavigate } from 'react-router-dom';

import img from '../../assets/react.svg';

function Experiencias() {

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
        }
    ];

    const start = (
        <img src={img} alt="Logo" style={{ width: 40, height: 40, marginRight: '10px' }} />
    );

    const end = (
        <Button label='Meu Currículo' icon='pi pi-file' />
    );

    return (
        <div>
            <header>
                <Menubar className='w-full bg-gray-900 border-none fixed top-0 left-0 p-3' model={items} start={start} end={end} />
            </header>
            <main className='flex f-row px-8 mt-8 gap-8'>
                <h1 className='text-cyan-50'>EXPERIÊNCIAS</h1>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Experiencias
