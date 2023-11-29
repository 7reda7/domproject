function addToCart(productName) {
    const cartItems = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = productName;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        cartItems.removeChild(li);
    };
    li.appendChild(removeButton);
    cartItems.appendChild(li);
}