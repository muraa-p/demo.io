// filepath: c:\Users\yasir\OneDrive\Documents\APU\myjunks\websites ig\ecommerce-website-1\src\js\main.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.id;
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-count').textContent = cartCount;
    }
});