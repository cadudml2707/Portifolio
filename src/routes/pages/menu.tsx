import { Button } from 'primereact/button';

import imgMe from '../../assets/foto_eu.jpeg';
import imgSkills from '../../assets/habilidades.svg'
import imgObjective from '../../assets/objetivos.svg'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Cards from '../../components/Cards';

function Menu() {
    return (
        <div>
            <Header />
            <main className='px-8 my-8'>
                <div className='flex flex-wrap py-8 my-8 justify-content-around shadow-4'>
                    <div className='w-4'>
                        <h1 className='text-cyan-400 text-5xl mb-5' >Quem sou eu?</h1>
                        <p className='text-justify text-cyan-50 mb-5'>
                        Sou Carlos Eduardo Dias, desenvolvedor de Software com experiência em projetos web. 
                        Tenho formação técnica em Informática e curso Sistemas de Informação. 
                        Atualmente, trabalho com UX/UI Design, criando interfaces funcionais e 
                        intuitivas.
                        </p>
                        <div className='flex gap-3'>
                            <a href="https://www.linkedin.com/in/carlos-eduardo-dias-560935254/" target='"_blank"'>
                                <Button icon="pi pi-linkedin" rounded outlined aria-label="Filter" />
                            </a>
                            <a href="https://github.com/cadudml2707" target='"_blank"'>
                                <Button icon="pi pi-github" rounded outlined aria-label="Filter" />
                            </a>
                            <a href="mailto:carloseduardodml.profissional@gmail.com" target='"_blank"'>
                                <Button icon="pi pi-envelope" rounded outlined aria-label="Filter" />
                            </a>
                            <a href="https://www.instagram.com/cadudml?igsh=MTZ3Z3MxbW5rbGN1bg==" target='"_blank"'>
                                <Button icon="pi pi-instagram" rounded outlined aria-label="Filter" />
                            </a>
                        </div>
                    </div>
                    <img draggable="false" className='select-none border-circle' src={imgMe} alt="logo" width={350} height={350} />
                </div>
                <div className='flex flex-wrap py-8 my-8 justify-content-around shadow-4'>
                    <img draggable="false" className='' src={imgSkills} alt="logo" width={400} />
                    <div className=' w-4'>
                        <h1 className='text-cyan-400 text-5xl mb-5' >Habilidades</h1>
                        <p className='text-justify text-cyan-50 mb-5'>
                        Tenho experiência em desenvolvimento full stack, com foco no front-end. 
                        Trabalho com ReactJS e TypeScript, usando bibliotecas como PrimeReact e Chakra UI. 
                        Também tenho conhecimento em UX e Java, o que fortalece minhas habilidades em 
                        desenvolvimento de sistemas.
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap py-8 my-8 justify-content-around shadow-4'>
                    <div className=' w-4'>
                        <h1 className='text-cyan-400 text-5xl mb-5' >Objetivos</h1>
                        <p className='text-justify text-cyan-50 mb-5'>
                        Meu objetivo é consolidar minha carreira como desenvolvedor de Software, atuando em projetos desafiadores. 
                        Busco expandir meus conhecimentos em Back-End, especialmente em Java, 
                        para me tornar um desenvolvedor full-stack e entregar soluções completas.
                        </p>
                    </div>
                    <img draggable="false" className='' src={imgObjective} alt="logo" width={400} />
                </div>
                <div className="align-content-center">
                    <h1 className='text-cyan-400 text-5xl mb-5' >Projetos</h1>
                    <Cards />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Menu
