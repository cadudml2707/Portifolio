import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export function Formacao() {
    return (
        <div>
            <Header/>
            <main className='flex f-row px-8 mt-8 gap-8'>
                <h1 className='text-cyan-50'>FORMAÇÃO</h1>
            </main>
            <Footer/>
        </div>
    )
}
