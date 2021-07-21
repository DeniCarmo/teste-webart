var cartItems = [];

let app = {
    showcaseCarousel: ()=>{
        $('.showcase-carousel-js').not('.slick-initialized').slick({
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            nextArrow: `<i class="showcase-icon showcase-icon-next"><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512"><path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z"/></svg></i>`,
            prevArrow: `<i class="showcase-icon showcase-icon-prev"><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512"><path d="m189.451 275.565 223.897-223.897v-51.668l-275.565 275.565 275.565 275.565v-51.668z"/></svg></i>`,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }]
        });
    },
    loadProducts: ()=>{
        let products = new Product();
        let showcase = document.querySelector('#showcase');

        [...products._products].forEach((prod, index)=>{
            showcase.innerHTML += `
            <div" class="showcase-item col-12 col-md-6 col-lg-4 col-xl-4">
                <div class="showcase-item__image">
                    <img src="${prod.productImage.src}" alt="${prod.productImage.alt}" title="${prod.productImage.alt}">
                </div>
                <div class="showcase-item__info">
                    <span class="showcase-item__name">${prod.productName}</span>
                    <span class="showcase-item__price">R$ ${prod.productPrice}</span>
                    <span class="showcase-item__installments">
                        ou <strong>R$ ${(prod.productPrice / prod.productMaxInstallments).toFixed(2)}</strong> em até <strong>${prod.productMaxInstallments}x</strong> sem juros
                    </span>
                </div>
                <a class="showcase-item__buy">Comprar</a>
            </div>
            `;
        });
    },
    addToCart: ()=>{
        document.addEventListener('click', function(e){
            if(e.target && e.target.classList.contains('showcase-item__buy')){
                e.preventDefault();
                let itemName = e.target.previousSibling.previousSibling.childNodes[1].innerText;
                let products = new Product();
                let itemData = products._products.find((prod)=>{
                    return prod.productName == itemName;
                });

                let itemPos = ()=>{
                    for(i=0; i <= cartItems.length; i++){
                        if(cartItems.length && cartItems[i] && cartItems[i].productName == itemData.productName){
                            return i;
                            break;
                        }
                    }
                }
                
                if(itemPos() >= 0){
                    cartItems[itemPos()].quant += 1;
                }else{
                    itemData.quant = 1;
                    cartItems.push(itemData);
                }
            }
        });
    },
    removeFromCart: ()=>{
        document.addEventListener('click', function(e){
            if(e.target && e.target.classList.contains('cart-modal-item__remove')){
                let itemPos = ()=>{
                    for(i=0; i <= cartItems.length; i++){
                        if(cartItems.length && cartItems[i] && cartItems[i].productName == itemData.productName){
                            return i;
                            break;
                        }
                    }
                }
                
                if(itemPos() >= 0){
                    cartItems[itemPos()].quant += 1;
                }else{
                    itemData.quant = 1;
                    cartItems.push(itemData);
                }
            }
        });
    },
    loadCart: ()=>{
        let cartEl = document.querySelector('.cart-modal');

        console.log(cartItems);

        if(cartItems.length){
            // let emptyCart = document.querySelector('.cart-modal-empty');
            [...cartItems].forEach((item, index)=>{
                cartEl.innerHTML += `
                <div class="cart-modal-item">
                    <a href="#" class="cart-modal-item__thumb">
                        <img src="${item.productImage.thumb}" alt="${item.productImage.alt}">
                    </a>
                    <div class="cart-modal-item__details">
                        <a href="#" class="cart-modal-item__name">${item.productName}</a>
                        <span class="cart-modal-item__quant">Quantidade: ${item.quant}</span>
                        <span class="cart-modal-item__price">R$ ${item.productPrice}</span>
                    </div>
                    <span class="cart-modal-item__remove">&#10006;</span>
                </div>
                `;
            });

            if($('.cart-modal-empty')){
                $('.cart-modal-empty').remove();
            }
        }else{
            cartEl.innerHTML = `<span class="cart-modal-empty">Carrinho Vazio</span>`;
        }
    },
    cartHover: ()=>{
        let cartEl = document.querySelector('.cart');

        cartEl.addEventListener('mouseenter', ()=>{
            app.loadCart();
        });

        cartEl.addEventListener('mouseleave', ()=>{
            let itemEl = document.querySelector('.cart-modal-item');
            if(itemEl){
                $(itemEl).remove();
            }
        });
    },
    menuMobile: ()=>{
        let btnOpen = document.querySelector('#menuOpen'),
            btnClose = document.querySelector('#menuClose'),
            navEl = document.querySelector('.nav');

        btnOpen.addEventListener('click', e=>{
            navEl.classList.remove('menu-mobile--active');
            navEl.classList.add('menu-mobile--active');
        });

        btnClose.addEventListener('click', e=>{
            navEl.classList.remove('menu-mobile--active');
        });
    }
}

$(document).ready(()=>{

    let $document = $(document),
        $window = $(window),
        $body = $('body'),
        $html = $('html');

        //Functions
        app.loadProducts();
        app.showcaseCarousel();
        app.addToCart();
        app.cartHover();
        app.menuMobile();
});