class Product{

    constructor(){

        this._products = [
            {
                productName: 'Produto teste',
                productPrice: '120.00',
                productMaxInstallments: '4',
                productImage: {
                    src: './img/img-produto.png',
                    thumb: './img/product-thumb.png',
                    alt: 'Product Image'
                }
            },
            {
                productName: 'Produto teste 2',
                productPrice: '140.00',
                productMaxInstallments: '6',
                productImage: {
                    src: './img/img-produto.png',
                    thumb: './img/product-thumb.png',
                    alt: 'Product Image'
                }
            },
            {
                productName: 'Produto teste 3',
                productPrice: '120.00',
                productMaxInstallments: '2',
                productImage: {
                    src: './img/img-produto.png',
                    thumb: './img/product-thumb.png',
                    alt: 'Product Image'
                }
            },
            {
                productName: 'Produto teste 4',
                productPrice: '160.00',
                productMaxInstallments: '4',
                productImage: {
                    src: './img/img-produto.png',
                    thumb: './img/product-thumb.png',
                    alt: 'Product Image'
                }
            },
            {
                productName: 'Produto teste 5',
                productPrice: '140.00',
                productMaxInstallments: '3',
                productImage: {
                    src: './img/img-produto.png',
                    thumb: './img/product-thumb.png',
                    alt: 'Product Image'
                }
            },
            {
                productName: 'Produto teste 6',
                productPrice: '120.00',
                productMaxInstallments: '4',
                productImage: {
                    src: './img/img-produto.png',
                    thumb: './img/product-thumb.png',
                    alt: 'Product Image'
                }
            }
        ]
    }

    get products(){
        return this._products;
    }
}