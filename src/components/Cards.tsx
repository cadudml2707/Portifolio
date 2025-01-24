import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

export default function BasicDemo() {
    // Estado para armazenar os produtos
    const [products, setProducts] = useState([]);

    // Exemplo de opções responsivas para o Carousel
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    // Função para simular a busca de produtos (pode ser substituída por uma requisição API)
    useEffect(() => {
        const fetchedProducts = [
            { id: 1, name: 'Produto 1', image: 'caminho/para/imagem1.jpg' },
            { id: 2, name: 'Produto 2', image: 'caminho/para/imagem2.jpg' },
            { id: 3, name: 'Produto 3', image: 'caminho/para/imagem3.jpg' },
        ];
        setProducts(fetchedProducts);
    }, []);

    // Template para renderizar cada item do Carousel
    const productTemplate = (product: { image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) => {
        return (
            <div className="product-item">
                <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                <h4>{product.name}</h4>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel
                value={products}
                numVisible={3}
                numScroll={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
            />
        </div>
    );
}