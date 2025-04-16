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
                    <p>
                        <a className='no' href="https://www.linkedin.com/in/carlos-eduardo-dias-560935254/" target='_blanck'>
                            linkedin
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/cadudml2707">
                            github
                        </a>
                    </p>
                    <p>
                        <a href="mailto:carloseduardodml.profissional@gmail.com">
                            carloseduardodml.profissional@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/cadudml?igsh=MTZ3Z3MxbW5rbGN1bg==">
                            instagram
                        </a>
                    </p>
                </div>
            </div>
            <div className="flex justify-content-center p-1 bg-gray-700 text-cyan-50">
                <p className="p-mr-3">© {new Date().getFullYear()} Carlos Eduardo Dias </p>
            </div>
        </footer>
    );
}

export default Footer;