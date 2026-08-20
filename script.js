// Product Data
const products = [
    { id: 1, name: "Classic Cotton Tee", price: 29.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
    { id: 2, name: "Netriva Denim Jacket", price: 89.99, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80" },
    { id: 3, name: "Urban Cargo Pants", price: 59.99, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80" },
    { id: 4, name: "Essential Hoodie", price: 49.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80" }
];

let cart = [];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');

// Render Products
function renderProducts() {
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.classList.add('product-card');
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productEl);
    });
}

// Cart Functions
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price} <button onclick="removeFromCart(${index})" style="color:red; border:none; background:none; cursor:pointer;">X</button></span>
        `;
        cartItems.appendChild(itemEl);
    });

    totalPrice.innerText = total.toFixed(2);
}

// Modal Toggle
cartIcon.addEventListener('click', () => cartModal.style.display = 'block');
closeCart.addEventListener('click', () => cartModal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
});

// Initialize
renderProducts();
