import { Button } from 'primereact/button';

export function Footer() {
    return (
        <footer>
            <div className="lg:flex sm:flex-row justify-content-center gap-8 p-8 bg-cyan-600">
                <div className="flex-row flex-wrap justify-content-start gap-3 lg:w-3 md:w-5 sm:w-5 text-white">
                    <h3 className='border-bottom-2 border-orange-500 pb-3 w-1 white-space-nowrap'>Sobre mim</h3>
                    <p className='text-justify'>Desenvolvedor Full Stack com foco em ReactJS, TypeScript, Java e UX/UI Design. Cursando em Sistemas de Informação, 
                        trabalho criando interfaces intuitivas e tenho afinidade com POO. Busco consolidar minha carreira como dev full-stack, 
                        aprofundando conhecimentos em back-end para entregar soluções completas.</p>
                </div>
                <div className="flex-row justify-content-start gap-3 lg:w-3 sm:w-5 text-white">
                    <h3 className='border-bottom-2 border-orange-500 pb-3 w-1'>
                        Contatos
                    </h3>
                    <p>
                        <a className='no-underline' href="https://www.linkedin.com/in/carlos-eduardo-dias-560935254/" target='_blanck'>
                            <Button icon="pi pi-linkedin" className='bg-cyan-600 border-none gap-2'>Linkedin</Button>
                        </a>
                    </p>
                    <p>
                        <a className='no-underline' href="https://github.com/cadudml2707" target='_blanck'>
                            <Button icon="pi pi-github" className='bg-cyan-600 border-none gap-2'>GitHub</Button>
                        </a>
                    </p>
                    <p>
                        <a className='no-underline' href="mailto:carloseduardodml.profissional@gmail.com" target='_blanck'>
                            <Button icon="pi pi-envelope" className='bg-cyan-600 border-none gap-2'>Email</Button>
                        </a>
                    </p>
                    <p>
                        <a className='no-underline' href="https://www.instagram.com/cadudml?igsh=MTZ3Z3MxbW5rbGN1bg==" target='_blanck'>
                            <Button icon="pi pi-instagram" className='bg-cyan-600 border-none gap-2'>Instagram</Button>
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
