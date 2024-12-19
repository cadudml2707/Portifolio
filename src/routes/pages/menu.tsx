import { Button } from 'primereact/button';

import img from '../../assets/react.svg';
import imgDev from '../../assets/img-dev.svg';

import Header from '../../components/header';
import Footer from '../../components/footer';

function Menu() {
    return (
        <div>
            <Header/>
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
            <Footer />
        </div>
    )
}

export default Menu
