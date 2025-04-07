import Header from '../../components/header';
import Footer from '../../components/footer';
import imgBringel from '../../assets/bringel.jpeg';

function Experiencias() {
    return (
        <div>
            <Header />
            <main className='px-8 my-8'>
                <div className='flex flex-column justify-content-around pb-8 my-8 shadow-4'>
                    <div className='bg-black opacity-50'>
                        <img draggable="false" className='select-none w-full' src={imgBringel} alt="logo" height={700} />
                    </div>
                    <div className='w-full px-8 pt-5'>
                        <h1 className='text-cyan-400 text-5xl' >Grupo Bringel</h1>
                        <h3 className='text-cyan-400 mb-5' >Assistente de TI</h3>
                        <p className='text-justify text-cyan-50 mb-5'>
                            Atualmente, atuo como Assistente de TI no Grupo Bringel, onde trabalho com Desenvolvimento Web Frontend utilizando TypeScript, ReactJS, PrimeReact,
                            PrimeFlex e Chakra UI para criar interfaces modernas e responsivas. Participo ativamente do ciclo de Desenvolvimento Ágil DevOps, gerenciando containers
                            com Docker para garantir portabilidade e consistência entre ambientes. Além da programação, contribuo na prototipação de telas no Figma, criando designs
                            intuitivos com base na análise de requisitos dos usuários. Também desenvolvo sistemas de gerenciamento de processos, otimizando fluxos de trabalho, e utilizo
                            Azure DevOps para versionamento de código, assegurando colaboração eficiente e rastreabilidade das alterações. Essa experiência tem me permitido aprimorar minhas
                            habilidades técnicas enquanto entrego soluções inovadoras para a empresa.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Experiencias
