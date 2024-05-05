# Sonic-Collection-Store
- A proyect based on a Online Shop with a tematic of sonic by a studient sonic fan
 
- Gabriel Miguel Cabrera Samano No.Control 20491199
- proyecto que continua en relacion a la tienda online previa


## HOME
Home es la presentacion inicial de la pagina, la interaccion inicial que tiene el cliente o el administrador, funcionando de manera independientemente del usuario.
el logo en la parte superior izquierda que contiene el encabezado, funciona como un boton que redirecciona al inicio de esta pagina, de manera que independientemente de la pagina que nos encontremos, siempre retornara a este punto.
el boton "enter now" redirecciona hacia la pagina login, asi como la opcion "acount" dentro de la barra de navegacion.

### PRESENTACION VISUAL DE HOME:
![home](ImagePreview/home.png)

## ABOUT US
About Us es la presentacion del programador/diseñador, que informa al usuario acerca de los contactos directos con el dueño de la tienda, lo que permite una interaccion semi-directa con los ajustes de la pagina o verificacion de errores.
cuenta con un boton nombrado como "lets talk" que redirecciona hacia el contacto mas directo que tiene el diseñador (en este caso el perfil de facebook).

### PRESENTACION VISUAL DE ABOUT US:
![about](ImagePreview/aboutUs.png)

## LOG IN
LOG IN es el medio de acceso para acceder al contenido de la tienda, poder ver los productos disponibles en la tienda, comprar productos, entre otras opciones que se explicaran despues.
LOG IN es el acceso tanto para los usuarios que esten dados de alta en el sistema, y es quien determina si el usuario que accede es un rol "Admin" o "Customer" como se explica en el siguiente codigo:
para determinar si se accedio como usuario, la pagina mandara un mensaje de alerta dependiendo el nombre del usuario, y redireccionara a sus respectivos accesos.

```
// Function to handle user login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = getUsers();
    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        alert("Login successful! Welcome, " + user.username + "!");

        if (user.role === 'admin') {
            window.location.href = 'shopAdmin.html'; // Redirect to admin page
        } else if (user.role === 'customer') {
            window.location.href = 'shopUser.html'; // Redirect to customer page
        } else {
            alert("Unknown role. Please contact the administrator.");
        }
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}
```
### PRESENTACION VISUAL DEL LOGIN:
![login](ImagePreview/account.png)

### IF IS ADMIN
en dado caso que sea el administrador quien accedio, la barra de navegacion le otorgara todas las opciones disponibles del menu, otorgando todo el control disponible de la tienda y podra modificar los usuarios dentro del sistema, el listado de los productos y realizar un test de cuenta y productos para verificar sus ajustes, y con ello tambien contiene todas las opciones de parte del usuario cliente.

### PRESENTACION VISUAL DE LA SESION CON ADMIN:
![shopAdmin](ImagePreview/shopAdmin.png)

### IF IS CLIENT
en dado caso que sea un cliente quien accedio, la barra de navegacion solo se limitara a otorgar las opciones de la calculadora y agregar productos a su carrito.

### PRESENTACION VISUAL DE LA SESION CON CUSTOMER:
![shopUser](ImagePreview/shopUser.png)

## BOTH CAN USE CALCULATOR
Calculator es una opcion que ambos usuarios poseen y se despliegan de la misma manera, esta opcion dentro de la barra de navegacion interactua al habilitar o deshabilitar su opcion, es decir, cuando realizamos un click en ella, funcionando como un evento.

### el cuerpo de la calculadora
```
<div class="post-calculator">
        <div class="calculator-main">
            <input type="text" class="display"/>
    
            <div class="buttons">
                <button data-value="7">7</button>
                <button data-value="8">8</button>
                <button data-value="9">9</button>
                <button class="operator" id="unique" data-value="AC">AC</button>
                <button class="operator" id="unique" data-value="DEL">DEL</button>
    
                <button data-value="4">4</button>
                <button data-value="5">5</button>
                <button data-value="6">6</button>
                <button class="operator" data-value="*">*</button>
                <button class="operator" data-value="/">/</button>
    
                <button data-value="1">1</button>
                <button data-value="2">2</button>
                <button data-value="3">3</button>
                <button class="operator" data-value="+">+</button>
                <button class="operator" data-value="-">-</button>
    
                <button data-value="0">0</button>
                <button data-value="00">00</button>
                <button data-value=".">.</button>
                <button class="operator" data-value="%">%</button>
                <button class="operator" data-value="=">=</button>
            </div>
```

### codigo de como se despliega la calculadora
```
document.addEventListener("DOMContentLoaded", function () {
    var toggleCalculatorButton = document.getElementById("toggleCalculator");
    var calculatorDiv = document.getElementById("icalculator");

    toggleCalculatorButton.addEventListener("click", function () {
        if (calculatorDiv.style.display === "none") {
            calculatorDiv.style.display = "block";
        } else {
            calculatorDiv.style.display = "none";
        }
    });
});
```

### ### PRESENTACION VISUAL DE LA CALCULADORA:
![calculator](ImagePreview/calculator.png)

## BOTH CAN SHOP
dentro de las opciones en la barra de navegacion, se encuentra el icono de una bolsa de mandado junto a un contador. Este icono representa los productos que son seleccionados cuando el usuario presiona el boton de "add to cart", contando asi el prodcuto añadido a la bolsa, e ira incrementado o disminuyendo el numero dependiendo de las acciones que realizamos al acceder con el icono.

### Codigo que agrega los productos selectos al carrito
```
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
```

### Codigo que actualiza el contador de los productos

```
// Función para actualizar el contador de cantidad
function updateQuantity() {
    const uniqueProducts = new Set(cartItems.map(item => item.idproduct));
    const quantitySpan = document.querySelector('.quantity');
    quantitySpan.textContent = uniqueProducts.size;
}
```

### Codigo que renderiza el carrito
- cuando el usuario decide realizar un click en el icono de compras, se despliega un listado de productos en donde presentara el nombre del producto, su precio y ademas, integra una opcion adicional que permitira aumentar o disminuir la cantidad del mismo producto.
- en dado caso de que el cliente ya no desee el producto, cuenta con una opcion nombrada "remove", que eliminara el producto del carrito

```
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
```
### funciones adicionales que aumentan y/o disminuyen la cantidad de productos:
```
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
```

### funcion que permite remover un producto del listado de productos en el carrito
```
// Función para quitar un producto del carrito
function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.idproduct !== productId);
    renderCart();
    updateQuantity();
}

// Renderizar el carrito al cargar la página
renderCart();
```

### presentacion en HTML
- dentro de la presentacion del carrito, integra 2 opciones, la opcion de cerrar la ventana de carrito, y la opcion de comprar
- la opcion de comprar redirigira hacia una pagina con el registro confirmado de la compra, fungiendo como un ticket de los productos que el cliente decidio comprar

```
    <div class="card" id="shoppingCart">
        <h1>Cart</h1>
        <ul class="listCard" id="cartList"></ul>
        <div class="checkOut">
            <div class="total" id="totalPrice">0</div>
            <div class="acceptPurchase" onclick="generateTicket()">Purchase</div>
            <div class="closeShopping" onclick="toggleCart()">Close</div>
        </div>
    </div>
```
### PRESENTACION VISUAL DEL CARRITO:
![cart](ImagePreview/cart.png)

## BOTH RECIVE TICKET
- Ticket es la presentacion final de la compra una vez el cliente decidio realizar la compra.
- cuenta con una opcion de regresar a la pagina de la tienda, con la finalidad de realizar otra compra diferente.

### funcion que integra el contenido almacenado dentro de una variable, y la despliega en una tabla
```
// Function to decode URI component
function decodeURISafely(uri) {
    try {
        return decodeURIComponent(uri);
    } catch (e) {
        return uri;
    }
}

// Function to parse URL parameters
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const content = urlParams.get('content');
    const total = urlParams.get('total');
    return { content, total };
}

// Function to render ticket content
function renderTicketContent() {
    const { content, total } = getUrlParams();
    const ticketContentDiv = document.getElementById('ticketContent');
    const totalPriceDiv = document.getElementById('totalPrice');
    if (content && total) {
        const items = decodeURISafely(content).split('\n');
        let html = '';
        items.forEach(item => {
            html += `<div class="ticket-item">${item}</div>`;
        });
        ticketContentDiv.innerHTML = html;
        totalPriceDiv.textContent = `Total: $${total}`;
    } else {
        ticketContentDiv.textContent = 'No purchase information available.';
        totalPriceDiv.textContent = 'Total: $0';
    }
}

// Call renderTicketContent when the page loads
renderTicketContent();
```

### PRESENTACION VISUAL DEL TICKET DE COMPRA:
![ticket](ImagePreview/ticket.png)

## CRUD USERS
- CRUD USERS es una de las secciones por parte del administrador que le permite interactuar con el registro de los usuarios nuevos dentro del sistema, como es el caso de los usuarios de tipo admin y customer.
- en el contenido de esta pagina, se despliega una pagina con el contenido de todos los usuarios que se pueden editar si quereremos realizar un ajuste y/o eliminar en caso de ya no ser necesarios.

### funcion que define de manera predeterminada todo el contenido actual de los usuarios dentro del sistema: 
```
const dUsers = [
    { iduser: 1, username: 'admin', password: '123', role:'admin'},
    { iduser: 2, username: 'cliente1', password: '123', role:'customer'},
    { iduser: 3, username: 'cliente2', password: '123', role:'customer'},
    { iduser: 4, username: 'cliente3', password: '123', role:'customer'},
    { iduser: 5, username: 'cliente4', password: '123', role:'customer'},
    { iduser: 6, username: 'cliente5', password: '123', role:'customer'},
    { iduser: 7, username: 'cliente6', password: '123', role:'customer'},
    { iduser: 8, username: 'cliente7', password: '123', role:'customer'},
    { iduser: 9, username: 'cliente8', password: '123', role:'customer'},
    { iduser: 10, username: 'cliente9', password: '123', role:'customer'},
    { iduser: 11, username: 'cliente10', password: '123', role:'customer'},
    { iduser: 12, username: 'cliente11', password: '123', role:'customer'},
    { iduser: 13, username: 'cliente12', password: '123', role:'customer'},
    { iduser: 14, username: 'cliente13', password: '123', role:'customer'},
    { iduser: 15, username: 'cliente14', password: '123', role:'customer'},
    { iduser: 16, username: 'cliente15', password: '123', role:'customer'},
    { iduser: 17, username: 'cliente16', password: '123', role:'customer'},
    { iduser: 18, username: 'cliente17', password: '123', role:'customer'},
    { iduser: 19, username: 'cliente18', password: '123', role:'customer'},
    { iduser: 20, username: 'cliente19', password: '123', role:'customer'},
    { iduser: 21, username: 'cliente20', password: '123', role:'customer'},
    { iduser: 22, username: 'cliente21', password: '123', role:'customer'},
    { iduser: 23, username: 'cliente22', password: '123', role:'customer'},
    { iduser: 24, username: 'cliente23', password: '123', role:'customer'},
    { iduser: 25, username: 'cliente24', password: '123', role:'customer'},
    { iduser: 26, username: 'cliente25', password: '123', role:'customer'},
];

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || dUsers;
}
```

### funcion que renderiza el contenido actual de los usuarios que esten dentro del almacenamiento local
```
function renderUsers() {
    var usersTable = document.getElementById('userTable');
    var users = getUsers();
    
    usersTable.innerHTML = ''; 

    users.forEach(function (user) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.iduser}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.role}</td>
            <td>
                <button class = "button button--secondary" onclick="editUser(${user.iduser})">Edit</button>
                <button class = "button button--terciary" onclick="deleteUser(${user.iduser})">Delete</button>
            </td>
        `;
        usersTable.appendChild(row);
    });
}
```

### funciones que permiten la capacidad de añadir, editar y/o eliminar los usuarios, y actualizan el estado de la tabla de registros:
```
function addUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    var users = getUsers();

    var id = users.length > 0 ? Math.max(...users.map(user => user.iduser)) + 1 : 1;

    var user = {
        iduser: id,
        username: username,
        password: password,
        role: role
    };

    users.push(user);

    saveUsers(users);

    renderUsers();

    document.getElementById('userForm').reset();
}

function deleteUser(id) {
    var users = getUsers();
    var updatedUsers = users.filter(function(user) {
        return user.iduser !== id;
    });
    saveUsers(updatedUsers);
    renderUsers();
}

function editUser(id) {
    var users = getUsers();
    var user = users.find(function(user) {
        return user.iduser === id;
    });

    document.getElementById('username').value = user.username;
    document.getElementById('password').value = user.password;
    document.getElementById('role').value = user.role;

    deleteUser(id);
}

renderUsers();
``` 

### PRESENTACION VISUAL DEL CRUD DE USUARIOS:
![crudUser](ImagePreview/crudUser.png)

## CRUD PRODUCTS
- CRUD PRODUCTS es una de las secciones por parte del administrador que le permite interactuar con el catalogo completo de todos los productos dentro del sistema, el cual permite integrar el nombre del producto, el precio, y la imagen que relaciona al producto que estamos vendiendo.
- en el contenido de esta pagina, se despliega el contenido de todos los productos que se pueden editar si quereremos realizar un ajuste en el nombre, precio o imagen del producto, y/o eliminar en caso de ya no este disponible.

### Contenido definido de manera predefinida dentro del sistema
```
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

function getProducts() {
    var storedProducts = JSON.parse(localStorage.getItem('products'));
    products = storedProducts || dProducts;
}

getProducts();

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}
```

### funcion que renderiza el contenido actual de los productos listados, desplegandolos en una tabla
```
function renderProducts() {
    var productsTable = document.getElementById('productsTable');
    productsTable.innerHTML = '';

    products.forEach(function (product, index) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.idproduct}</td>
            <td>${product.productName}</td>
            <td>$${product.price}</td>
            <td><img src="${product.imageUrl}" alt="${product.productName}" style="max-width: 100px;"></td>
            <td>
                <button class = "button button--secondary" onclick="editProduct(${index})">Edit</button>
                <button class = "button button--terciary" onclick="deleteProduct(${index})">Delete</button>
            </td>
        `;
        productsTable.appendChild(row);
    });
}
```

### funciones que permiten la capacidad de añadir, editar y/o eliminar los productos, y actualizan el estado de la tabla de registros:
```

function addProduct() {
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productUrl = document.getElementById('productUrl').value;

    if (!productUrl.startsWith('https://')) {
        alert("Please enter a URL starting with 'https://'");
        return;
    }

    var product = {
        idproduct: Date.now(),
        productName: productName,
        imageUrl: productUrl,
        price: parseFloat(productPrice)
    };

    products.push(product);

    saveProducts();

    renderProducts();
}

function deleteProduct(index) {
    products.splice(index, 1);
    saveProducts(); 
    renderProducts(); 
}

function editProduct(index) {
    var newName = prompt("Enter new product name:");
    var newPrice = prompt("Enter new product price:");
    var newUrl = prompt("Enter new product image URL:");

    // Validate URL
    if (!newUrl.startsWith('https://')) {
        alert("Please enter a URL starting with 'https://'");
        return;
    }

    products[index].productName = newName;
    products[index].price = parseFloat(newPrice);
    products[index].imageUrl = newUrl;

    saveProducts();

    renderProducts();
}
```

### funcion que permite uan visualizacion previa antes de añadir la imagen dentro de los registros de productos:
```
function previewImage() {
    var productUrl = document.getElementById('productUrl').value;
    var imagePreview = document.getElementById('imagePreview');
    imagePreview.src = productUrl;
}

renderProducts();
```

### PRESENTACION VISUAL DEL CRUD DE PRODUCTOS:
![crudProduct](ImagePreview/crudProducts.png)
