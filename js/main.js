document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: 'Bad Bunny - YALQMDLG', price: 250000, image: 'asset/image/Vinilo-1.png' },
        { id: 2, name: 'The Exploited - Punk Not Dead', price: 20000, image: 'asset/image/Vinilo-2.png' },
        { id: 3, name: 'Trainspotting - Soundtrack', price: 30000, image: 'asset/image/Vinilo-3.png' },
        { id: 4, name: 'Beastie Boys - Check Your Head', price: 40000, image: 'asset/image/Vinilo-4.png' },
        { id: 5, name: 'Tiro de gracia - Ser Humano', price: 50000, image: 'asset/image/Vinilo-5.png' },
        { id: 6, name: 'Kraftwerk - Tour de France', price: 60000, image: 'asset/image/Vinilo-6.png' }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-md-4', 'col-sm-6', 'mb-4');
        productDiv.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Agregar al carrito</button>
                </div>
            </div>
        `;
        productList.appendChild(productDiv);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id == productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
    alert('Producto agregado al carrito');
}

function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = [
        { id: 1, name: 'Bad Bunny - YALQMDLG', price: 250000, image: 'asset/image/Vinilo-1.png' },
        { id: 2, name: 'The Exploited - Punk Not Dead', price: 20000, image: 'asset/image/Vinilo-2.png' },
        { id: 3, name: 'Trainspotting - Soundtrack', price: 30000, image: 'asset/image/Vinilo-3.png' },
        { id: 4, name: 'Beastie Boys - Check Your Head', price: 40000, image: 'asset/image/Vinilo-4.png' },
        { id: 5, name: 'Tiro de gracia - Ser Humano', price: 50000, image: 'asset/image/Vinilo-5.png' },
        { id: 6, name: 'Kraftwerk - Tour de France', price: 60000, image: 'asset/image/Vinilo-6.png' }
    ];

    let total = 0;
    cart.forEach(cartItem => {
        const product = products.find(p => p.id == cartItem.id);
        total += product.price * cartItem.quantity;
    });
    document.getElementById('cart-total').innerText = total;
}
