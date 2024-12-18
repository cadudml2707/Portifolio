import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

import { useNavigate} from 'react-router-dom';

import img from '../../assets/react.svg';

function Menu() {

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
            <main className='flex f-row px-8 mt-8 gap-8 border-solid border-1 border-green-500'>
                <div className='align-content-center border-solid border-1 border-yellow-500'>
                    <h1 className='text-cyan-400 text-5xl' >Bem-vindo!</h1>
                    <p className='text-cyan-50 f-wrap mb-5'>
                        Sou Carlos Eduardo Dias, desenvolvedor Front-End focado em criar interfaces intuitivas e funcionais. Busco constantemente aprimorar 
                        minhas habilidades e utilizar as tecnologias mais atuais para entregar soluções de qualidade. Estou sempre aberto a
                        aprender e a colaborar para construir experiências digitais que atendam às necessidades dos usuários.
                    </p>
                    <div className='flex gap-3'>
                        <Button icon="pi pi-linkedin" rounded outlined aria-label="Filter" />
                        <Button icon="pi pi-envelope" rounded outlined aria-label="Filter" />
                        <Button icon="pi pi-instagram" rounded outlined aria-label="Filter" />
                    </div>
                </div>
                <img className='border-solid border-1 border-red-500' src={img} alt="logo" width={800} />
            </main>
            <footer className='bg-cyan-400'>
                <p>teste</p>
            </footer>
        </div>
    )
}

export default Menu
