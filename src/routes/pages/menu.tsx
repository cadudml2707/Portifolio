import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

import { useNavigate } from 'react-router-dom';

import img from '../../assets/react.svg';
import imgDev from '../../assets/img-dev.svg';

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
        <img src={imgDev} alt="Logo" style={{ width: 40, height: 40, marginRight: '10px' }} />
    );

    const end = (
        <Button label='Meu Currículo' icon='pi pi-file' />
    );

    return (
        <div>
            <header>
                <Menubar className='w-full bg-gray-900 border-none fixed top-0 left-0 p-3 z-1' model={items} start={start} end={end} />
            </header>
            <main className='px-8 my-8 z-0'>
                <div className='flex f-row gap-8 mb-8'>
                    <div className='align-content-center px-8'>
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
                    <img className='' src={img} alt="logo" width={800} />
                </div>
                <div className='flex f-row gap-8'>
                    <img className='' src={imgDev} alt="logo" width={400} />
                    <div className='align-content-center px-8'>
                        <h1 className='text-cyan-400 text-5xl' >Desenvolvimento Front-End</h1>
                        <p className='text-cyan-50 f-wrap mb-5'>
                            Sou Carlos Eduardo Dias, desenvolvedor Front-End focado em criar interfaces intuitivas e funcionais. Busco constantemente aprimorar
                            minhas habilidades e utilizar as tecnologias mais atuais para entregar soluções de qualidade. Estou sempre aberto a
                            aprender e a colaborar para construir experiências digitais que atendam às necessidades dos usuários.
                        </p>
                    </div>
                </div>
            </main>
            <footer className="bg-cyan-400 p-8">
                <div className="p-d-flex p-ai-center">
                    <p className="p-mr-3">© {new Date().getFullYear()} Meu Portfólio</p>
                    <p>Desenvolvido por Carlos Eduardo Dias</p>
                </div>
                <div>
                    <Button
                        label="LinkedIn"
                        icon="pi pi-linkedin"
                        className="p-button-text p-mr-2 text-cyan-50"
                        onClick={() => window.open("https://www.linkedin.com/in/carloseduardodias/", "_blank")}
                    />
                    <Button
                        label="GitHub"
                        icon="pi pi-github"
                        className="p-button-text p-mr-2"
                        onClick={() => window.open("https://github.com/carlosdias", "_blank")}
                    />
                </div>
            </footer>
        </div>
    )
}

export default Menu
