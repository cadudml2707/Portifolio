import { Button } from 'primereact/button';

function Footer() {
    return (
        <footer className="bg-cyan-400 p-8">
            <div className="p-d-flex p-ai-center">
                <p className="p-mr-3">© {new Date().getFullYear()} Meu Portfólio</p>
                <p>Desenvolvido por Carlos Eduardo Dias</p>
            </div>
            <div>
                <Button
                    label="LinkedIn"
                    icon="pi pi-linkedin"
                    className="p-button-text p-mr-2 text-cyan-50"
                    onClick={() => window.open("https://www.linkedin.com/in/carlos-eduardo-dias-560935254/", "_blank")}
                />
                <Button
                    label="GitHub"
                    icon="pi pi-github"
                    className="p-button-text p-mr-2"
                    onClick={() => window.open("https://github.com/cadudml2707", "_blank")}
                />
            </div>
        </footer>
    );
}

export default Footer;