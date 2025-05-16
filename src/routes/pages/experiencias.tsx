import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import imgBringel from '../../assets/imagens/bringel.svg';
import imgVitoria from '../../assets/imagens/vitoria.jpeg';

export function Experiencias() {
    return (
        <div>
            <Header />
            <main className='px-8 my-8'>
                <div className='flex flex-row justify-content-around shadow-4 p-8'>
                    <div className='bg-black opacity-90'>
                        <a href="https://gbringel.com/" className='no-underline' target="_blank">
                            <img draggable="false" className='select-none' src={imgBringel} alt="logo" height={350} />
                        </a>
                    </div>
                    <div className='w-full px-8 pt-5'>
                        <a href="https://gbringel.com/" className='no-underline' target="_blank">
                            <h1 className='text-orange-400 text-4xl'>Grupo Bringel</h1>
                        </a>
                        <h3 className='text-orange-50 mb-5' >Assistente de TI - Design</h3>
                        <p className='text-justify text-cyan-50 mb-5'>
                            Desenvolvimento <text className='text-orange-200'>Frontend</text> com TypeScript, ReactJS, PrimeReact e Chakra UI para interfaces responsivas. <text className='text-orange-200'>Refatorei</text> o sistema principal,
                            reorganizando telas e estilos no Figma e implementando as mudanças com <text className='text-orange-200'>React</text>. Prototipação de interfaces <text className='text-orange-200'>(UX/UI)</text> no Figma, alinhando design aos requisitos.
                            Uso Docker como apoio no desenvolvimento e Azure DevOps para versionamento. Atuo da concepção visual à entrega técnica, integrando <text className='text-orange-200'>design</text> e código para soluções eficientes.
                        </p>
                    </div>
                </div>
                <div className='flex flex-row justify-content-around shadow-4 mt-8 p-8'>
                    <div className='bg-black opacity-90'>
                        <a href="https://www.vslservicos.com.br/" className='no-underline' target='_black'>
                            <img draggable="false" className='select-none' src={imgVitoria} alt="logo" height={350} />
                        </a>
                    </div>
                    <div className='w-full px-8 pt-5'>
                        <a href="https://www.vslservicos.com.br/" className='no-underline' target='_blank'>
                            <h1 className='text-blue-600 text-4xl' >Vitória Serviços de Limpeza</h1>
                        </a>
                        <h3 className='text-orange-50 mb-5' >Auxiliar de Escritório</h3>
                        <p className='text-justify text-cyan-50 mb-5'>
                            <text className='text-blue-200'>Organização</text> e supervisão de documentos corporativos, garantindo gestão eficiente e compliance. Atuei em processos de <text className='text-blue-200'>RH</text>, incluindo triagem de currículos para recrutamento,
                            preenchimento do <text className='text-blue-200'>e-Social</text> e gestão de assinaturas em carteiras de trabalho. Essa experiência, ainda que fora da área de tecnologia, aprimorou minhas habilidades em organização
                            e <text className='text-blue-200'>comunicação</text>, agregando valor à minha atuação profissional.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
