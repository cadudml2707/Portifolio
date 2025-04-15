import { Button } from 'primereact/button';

function Footer() {
    return (
        <footer>
            <div className="flex justify-content-center p-8 bg-cyan-600">
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
            <div className="flex justify-content-center p-1 bg-gray-600 text-cyan-50">
                <p className="p-mr-3">© {new Date().getFullYear()} Meu Portfólio </p> 
            </div>
        </footer>
    );
}

export default Footer;