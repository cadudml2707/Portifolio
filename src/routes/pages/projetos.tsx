import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import videoHealthMap from '../../assets/healthmap.mp4';

export function Projetos() {
    return (
        <div>
            <Header />
            <main className='px-8 my-8'>
                <div className='flex flex-column justify-content-around shadow-4 p-8'>
                    <div className='bg-black opacity-90 w-full'>
                        <video src={videoHealthMap} className='w-full' height={500} controls ></video>
                    </div>
                    <div className='w-full px-8 pt-5'>
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
            </main>
            <Footer />
        </div>
    )
}
