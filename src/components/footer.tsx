import { Button } from 'primereact/button';

function Footer() {
    return (
        <footer>
            <div className="lg:flex sm:flex-row justify-content-center gap-8 p-8 bg-cyan-600">
                <div className="flex-row flex-wrap justify-content-start gap-3 text-white">
                    <h3 className='border-bottom-2 border-orange-500 pb-3 white-space-nowrap' style={{ width: '20%' }}>Sobre mim</h3>
                    <p>Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum</p>
                </div>
                <div className="flex-row justify-content-start gap-3 text-white">
                    <h3 className='border-bottom-2 border-orange-500 pb-3' style={{ width: '20%' }}>
                        Contatos
                    </h3>
                    <p>linkedin</p>
                    <p>github</p>
                    <p>carloseduardodml.profissional@gmail.com</p>
                    <p>instagram</p>
                </div>
            </div>
            <div className="flex justify-content-center p-1 bg-gray-700 text-cyan-50">
                <p className="p-mr-3">© {new Date().getFullYear()} Carlos Eduardo Dias </p>
            </div>
        </footer>
    );
}

export default Footer;