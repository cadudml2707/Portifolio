import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

import videoHealthMap from '../../assets/videos/healthmap.mp4';
import videoJumperBoy from '../../assets/videos/jumperboy.mp4';
import imgDisponivelBreve  from '../../assets/imagens/disponível_breve.png';

export function Projetos() {
    return (
        <div>
            <Header />
            <main className='px-8 my-8'>
                <div className='flex flex-column justify-content-around shadow-4 p-8 m-8'>
                    <div className='bg-black opacity-90 w-full'>
                        <video src={videoHealthMap} className='w-full' height={500} controls ></video>
                    </div>
                    <div className='w-full px-8 pt-5'>
                        <div>
                            <a href="https://gbringel.com/" className='no-underline' target="_blank">
                                <h1 className='text-blue-400 text-4xl'>HealthMap</h1>
                            </a>
                            <h3 className='text-blue-50 mb-5' >Dev Frontend/Designer</h3>
                            <p className='text-justify text-cyan-50 mb-5'>
                                Desenvolvi um software de gerenciamento de informações para unidades de saúde, com versões móvel e web. No mobile, utilizei React Native e TypeScript para
                                garantir performance e tipagem segura. Para a plataforma web, adotei HTML, CSS, JavaScript e Bootstrap para um layout responsivo. Implementei a integração
                                dos dados em tempo real usando o Firebase como banco de dados e integrei a Google Maps API para visualização geográfica das unidades. O objetivo foi centralizar
                                e otimizar o acesso às informações de saúde de forma intuitiva.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-column justify-content-around shadow-4 p-8 m-8'>
                    <div className='bg-black opacity-90 w-full'>
                        <video src={videoJumperBoy} className='w-full' height={500} controls ></video>
                    </div>
                    <div className='w-full px-8 pt-5'>
                        <div>
                            <a href="https://gbringel.com/" className='no-underline' target="_blank">
                                <h1 className='text-4xl' style={{ color: "#ff914d" }}>JumperBoy</h1>
                            </a>
                            <h3 className='text-blue-50 mb-5' >Game Developer</h3>
                            <p className='text-justify text-cyan-50 mb-5'>
                            Desenvolvi um jogo de plataforma 2D utilizando C# com Programação Orientada a Objetos (POO) na Unity,
                             garantindo mecânicas fluidas e interativas, enquanto codifiquei e depurei os scripts no Visual Studio para otimização de performance.
                              Realizei o planejamento detalhado de mecânicas e a ambientação de cenários, criando levels imersivos com assets customizados e integração de física e colisões.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-column justify-content-around shadow-4 p-8 m-8'>
                    <div className='bg-black opacity-90 w-full'>
                        <img draggable="false" className='w-full' height={500} src={imgDisponivelBreve} />
                    </div>
                    <div className='w-full px-8 pt-5'>
                        <div>
                            <a href="https://gbringel.com/" className='no-underline' target="_blank">
                                <div className='flex direction-column'>
                                    <h1 className='text-4xl' style={{ color: "#d8fd12" }}>Market</h1><h1 className='text-4xl' style={{ color: "#45cfef" }}>Pay</h1>
                                </div>
                            </a>
                            <h3 className='text-blue-50 mb-5' >Dev FullStack</h3>
                            <p className='text-justify text-cyan-50 mb-5'>
                                Desenvolvi um Sistema de Ponto de Venda (PDV) utilizando Java com Programação Orientada a Objetos (POO) para o backend,
                                garantindo código modular e escalável, enquanto no frontend apliquei React e TypeScript para criar uma interface dinâmica e tipada.
                                Utilizei GitHub para versionamento de código, seguindo boas práticas de organização em branches, e implementei rotas eficientes com
                                integração via requisições HTTP, assegurando comunicação fluida entre frontend e backend.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
