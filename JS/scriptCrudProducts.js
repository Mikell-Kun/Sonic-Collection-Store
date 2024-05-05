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

function previewImage() {
    var productUrl = document.getElementById('productUrl').value;
    var imagePreview = document.getElementById('imagePreview');
    imagePreview.src = productUrl;
}

renderProducts();