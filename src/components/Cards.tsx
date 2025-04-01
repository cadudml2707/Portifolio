import { Card, CardProps } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import imgHealthMap from '../assets/img-healthmap.svg';
import imgMarketPay from '../assets/img-marketpay.svg'
import { Image } from 'primereact/image';

function Cards() {
    const cardDados = [
        {
            title: "Projeto HealthMap",
            subtitle: "Dev Frontend/Designer",
            text: "Sistema de gerenciamento de unidades de saúde, desenvolvido em React Native com TypeScript e integrado ao Firebase para armazenamento de dados. O projeto foi apresentado em feiras de tecnologia.",
            img: imgHealthMap
        },
        {
            title: "MarketPay",
            subtitle: "Dev Fullstack",
            text: "Sistema web de ponto de venda desenvolvido em Java e TypeScript, compatível com supermercados, lojas e outros estabelecimentos. Criado para aprimorar meus conhecimentos em Java, React e integração entre backend e frontend, além de reforçar conceitos de POO.",
            img: imgMarketPay
        },
        {
            title: "JumperBoy",
            subtitle: "Game Devloper",
            text: "Opa",
            img: ''
        },
    ];

    const cardTemplate = (cardData: { title: string; subtitle: string; text: string; img: any }) => (
        <Card
            className='mx-5 justify-content-around shadow-4 p-3 bg-gray-800 text-white'
            title={cardData.title}
            subTitle={cardData.subtitle}>
            <div className='flex flex-row gap-3 align-items-center'>
                <Image src={cardData.img} height='120' alt={cardData.title} />
                <p className="m-0">
                    {cardData.text}
                </p>
            </div>
        </Card>
    );

    return (
        <div className="card">
            <Carousel
                autoplayInterval={5000}
                value={cardDados}
                numVisible={2}
                numScroll={1}
                circular
                itemTemplate={cardTemplate}
            />
        </div>
    );
}

export default Cards;
