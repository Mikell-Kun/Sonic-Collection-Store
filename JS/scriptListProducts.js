const dProducts = [
    { idproduct: 1, productName: "20th Aniversary Sonic the hedgehog Figure Collection", imageUrl: "https://dcdn.mitiendanube.com/stores/113/368/products/diseno-sin-titulo-181-15a680b868360e28e216210297326565-1024-1024.png", price: 200 },
    { idproduct: 2, productName: "30th Aniversary Sonic the hedgehog Figure Collection", imageUrl: "https://www.igcomics.mx/image/catalog/000PREVENTAS/00ABRIL/SONIC/sonic-the-hedgehog-30th-anniversary-gallery-1.jpg", price: 200 },
    { idproduct: 3, productName: "Sonic Adventure 2 Figure Collection", imageUrl: "https://resize.cdn.otakumode.com/ex/800.600/shop/product/fb3e7a69abfc449db3d866342012aee8.jpg", price: 100 },
    { idproduct: 4, productName: "Sonic Adventure Figure Collection edition 23", imageUrl: "https://www.ociostock.com/productos/imagenes/img_308696_0954dcac2acfe28adef6322a12ddd2da_20.jpg", price: 100 },
    { idproduct: 5, productName: "Set Sonic Classic figures", imageUrl: "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00019299541612-2l.jpg", price: 50 },
    { idproduct: 6, productName: "SquishSmallow's Sonic the hedgehog", imageUrl: "https://m.media-amazon.com/images/I/71wZZECEqlL._AC_UF894,1000_QL80_DpWeblab_.jpg", price: 20 },
    { idproduct: 7, productName: "SquishSmallow's Miles Tails Power", imageUrl: "https://m.media-amazon.com/images/I/61TGyAw6SuL._AC_UF894,1000_QL80_DpWeblab_.jpg", price: 20 },
    { idproduct: 8, productName: "SquishSmallow's Knuckles the equidna", imageUrl: "https://f.fcdn.app/imgs/e93167/www.xuruguay.com.uy/xuruuy/b64e/original/catalogo/1917264701821917264701821/460x460/squishmallows-knuckles-sonic-the-hedgehog-squishmallows-knuckles-sonic-the-hedgehog.jpg", price: 20 },
    { idproduct: 9, productName: "SquishSmallow's Shadow the hedgehog", imageUrl: "https://i.pinimg.com/736x/f4/f0/60/f4f060f11a386336a646073c664814b2.jpg", price: 20 },
    { idproduct: 10, productName: "Sonic Movie Collection", imageUrl: "https://s.catch.com.au/images/product/0075/75035/634170c067bcd549904560_w803h620.webp", price: 50 },
    { idproduct: 11, productName: "30th Aniversary Sonic History", imageUrl: "https://static-ppimages.freetls.fastly.net/nielsens/9781506719276.jpg?canvas=600,600&fit=bounds&height=600&mode=max&width=600&404=default.jpg", price: 500 },
    { idproduct: 12, productName: "Sega Genesis", imageUrl: "https://m.media-amazon.com/images/I/51PCiqTcClL._AC_UF1000,1000_QL80_.jpg", price: 150 },
    { idproduct: 13, productName: "Sonic the hedgehog Sega Genesis", imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg", price: 30 },
    { idproduct: 14, productName: "Sonic the hedgehog 2 Sega Genesis", imageUrl: "https://m.media-amazon.com/images/I/61UxudLPFEL._AC_UF1000,1000_QL80_DpWeblab_.jpg", price: 30 },
    { idproduct: 15, productName: "Sonic the hedgehog 3 Sega Genesis", imageUrl: "https://playclassic.games/wp-content/uploads/2019/04/Sonic-The-Hedgehog-3.jpg", price: 30 },
    { idproduct: 16, productName: "Sonic and Knuckles Sega Genesis", imageUrl: "https://m.media-amazon.com/images/I/61PI1w4gEML._AC_UF1000,1000_QL80_DpWeblab_.jpg", price: 30 },
    { idproduct: 17, productName: "T-shirt Sonic Unique", imageUrl: "https://m.media-amazon.com/images/I/41dpe+EXcjL._AC_SY580_.jpg", price: 20 },
    { idproduct: 18, productName: "T-shirt Sonic's Friends", imageUrl: "https://m.media-amazon.com/images/I/51IHUV362XS._AC_SY580_.jpg", price: 20 },
    { idproduct: 19, productName: "T-shirt Shadow the hedgehog", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_937562-MLM52222759391_102022-O.webp", price: 20 },
    { idproduct: 20, productName: "T-shirt Silver the hedgehog", imageUrl: "https://dcdn.mitiendanube.com/stores/114/482/products/325825-mlm25514843479_042017-o-5f6e5f37c773d1b73515299442156491-640-0.jpg", price: 20 },
    { idproduct: 21, productName: "Tennis Fila Sonic Movie Collect Edition", imageUrl: "https://images-cdn.ubuy.co.in/645051197dd3647e046751e8-fila-sonic-the-hedgehog-2-ray-tracer-evo.jpg", price: 70 },
];

// Function to load products from localStorage or use default products if not found
function getProducts() {
    var storedProducts = JSON.parse(localStorage.getItem('products'));
    products = storedProducts || dProducts;
}

// Load products when the page loads
getProducts();

function renderProductListForCart() {
    // Obtener los productos del localStorage
    getProducts();

    // Obtener el elemento donde se va a agregar la lista de productos
    var productListContainer = document.getElementById('productListForCart');

    // Limpiar el contenido previo
    productListContainer.innerHTML = '';

    // Iterar sobre cada producto y crear un elemento para mostrarlo en la lista
    products.forEach(function (product) {
        var productItem = document.createElement('div');
        productItem.classList.add('product-item-for-cart');

        // Contenido del elemento del producto
        productItem.innerHTML = `
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.productName}">
            </div>
            <div class="product-details">
                <h3>${product.productName}</h3>
                <p>Price: $${product.price}</p>
                <button class="button button--purchase" onclick="addToCart(${product.idproduct})">Add to Cart</button>
            </div>
        `;

        // Agregar el elemento del producto al contenedor de la lista de productos
        productListContainer.appendChild(productItem);
    });
}

// Llamar a la función para renderizar la lista de productos al cargar la página
renderProductListForCart();

// Variable para almacenar los productos en el carrito
let cartItems = [];

// Función para alternar la visualización del carrito
function toggleCart() {
    const cart = document.getElementById('shoppingCart');
    cart.classList.toggle('active');
}

// Función para añadir un producto al carrito
function addToCart(productId) {
    const product = dProducts.find(item => item.idproduct === productId);
    if (product) {
        const existingItem = cartItems.find(item => item.idproduct === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ ...product, quantity: 1 });
            updateQuantity();
        }
        renderCart();
    }
}

// Función para actualizar el contador de cantidad
function updateQuantity() {
    const uniqueProducts = new Set(cartItems.map(item => item.idproduct));
    const quantitySpan = document.querySelector('.quantity');
    quantitySpan.textContent = uniqueProducts.size;
}

// Función para renderizar el carrito
function renderCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.productName}">
            <div>
                <p>${item.productName}</p>
                <p>Price: $${item.price}</p>
                <div>
                    <button class="button button--sum" onclick="decreaseQuantity(${item.idproduct})">-</button>
                    <span>${item.quantity}</span>
                    <button class="button button--substract"  onclick="increaseQuantity(${item.idproduct})">+</button>
                </div>
            </div>
            <button class="button button--remove" onclick="removeFromCart(${item.idproduct})">Remove</button>
        `;
        cartList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('totalPrice').textContent = `Total: $${totalPrice}`;
}

// Función para aumentar la cantidad de un producto en el carrito
function increaseQuantity(productId) {
    const item = cartItems.find(item => item.idproduct === productId);
    if (item) {
        item.quantity++;
        renderCart();
    }
}

// Función para disminuir la cantidad de un producto en el carrito
function decreaseQuantity(productId) {
    const item = cartItems.find(item => item.idproduct === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        renderCart();
    }
}

// Función para quitar un producto del carrito
function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.idproduct !== productId);
    renderCart();
    updateQuantity();
}

// Renderizar el carrito al cargar la página
renderCart();

// Función para generar el ticket de compra
function generateTicket() {
    // Construir el contenido del ticket como una tabla HTML
    const ticketContent = `
        <table class="ticket__table">
            <thead>
                <tr>
                    <th class="ticket__header">Product Name</th>
                    <th class="ticket__header">Quantity</th>
                    <th class="ticket__header">Price</th>
                </tr>
            </thead>
            <tbody class="ticket__body">
                ${cartItems.map(item => `
                    <tr>
                        <td class="ticket__td">${item.productName}</td>
                        <td class="ticket__td">${item.quantity}</td>
                        <td class="ticket__td">$${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    // Codificar el contenido del ticket para pasar como parámetro de la URL
    const encodedTicketContent = encodeURIComponent(ticketContent);
    // Codificar el precio total para pasar como parámetro de la URL
    const totalPrice = getTotalPrice();
    // Redireccionar a la página de ticket de compra
    window.location.href = `ticket.html?content=${encodedTicketContent}&total=${totalPrice}`;
}


// // Función para generar el ticket de compra
// function generateTicket() {
//     // Construir el contenido del ticket
//     const ticketContent = cartItems.map(item => `${item.productName} - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}`).join('\n');
//     // Codificar el contenido del ticket para pasar como parámetro de la URL
//     const encodedTicketContent = encodeURIComponent(ticketContent);
//     // Codificar el precio total para pasar como parámetro de la URL
//     const totalPrice = getTotalPrice();
//     // Redireccionar a la página de ticket de compra
//     window.location.href = `ticket.html?content=${encodedTicketContent}&total=${totalPrice}`;
// }

function getTotalPrice() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}
