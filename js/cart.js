// Asegurarse que los elementos del carrito se mantengan al recargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateCartTotal();
});

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
