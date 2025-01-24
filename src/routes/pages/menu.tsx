import { Button } from 'primereact/button';

import imgMe from '../../assets/homem_feliz.jpg';
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
                            Sou Carlos Eduardo Dias, desenvolvedor Front-End com experiência no desenvolvimento de projetos web, focado em criar soluções
                            eficientes e de alta qualidade. Com formação técnica em Informática e atualmente cursando Sistemas de Informação, tenho uma base sólida
                            em tecnologia e estou sempre buscando aprimorar meus conhecimentos técnicos. Atualmente, atuo com UX/UI Design, onde aplico minha visão técnica
                            para criar interfaces funcionais e intuitivas.
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
                    <img draggable="false" className='select-none' src={imgMe} alt="logo" width={400} />
                </div>
                <div className='flex flex-wrap py-8 my-8 justify-content-around shadow-4'>
                    <img draggable="false" className='' src={imgSkills} alt="logo" width={400} />
                    <div className=' w-4'>
                        <h1 className='text-cyan-400 text-5xl mb-5' >Habilidades</h1>
                        <p className='text-justify text-cyan-50 mb-5'>
                            Tenho habilidades tanto com desenvolvimento backend como frontend, porém o meu foco é no front. Tenho experiência com o framework ReactJS com typescript,
                            eu o utilizo para estruturar páginas web, junto de bibliotecas como Primereact e Chakra UI para compor os componentes e o comportamento da página.
                            Além disso, tenho amplo conhecimento em experiência de usuário, o que contribui para a criação de interfaces intuitivas. Ademais, tenho conhecimentos práticos
                            em python e java, contribuindo para minhas habilidades em desenvolvimento de sistemas.
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap py-8 my-8 justify-content-around shadow-4'>
                    <div className=' w-4'>
                        <h1 className='text-cyan-400 text-5xl mb-5' >Objetivos</h1>
                        <p className='text-justify text-cyan-50 mb-5'>
                            Meu principal objetivo é consolidar minha carreira como desenvolvedor Front-End,
                            atuando em projetos desafiadores que me permitam aplicar e aprimorar minhas habilidades em tecnologias modernas.
                            Nesse sentido, pretendo expandir meus conhecimentos em Back-End, especialmente em Python e Java, para atuar de forma mais abrangente
                            no desenvolvimento de sistemas completos. Meu foco é me tornar um profissional full-stack, capaz de trabalhar tanto no Front-End quanto no Back-End,
                            entregando soluções robustas e integradas.
                        </p>
                    </div>
                    <img draggable="false" className='' src={imgObjective} alt="logo" width={400} />
                </div>
                <div className='flex flex-wrap py-8 my-8 justify-content-around shadow-4'>
                    <Cards />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Menu
