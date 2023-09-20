document.addEventListener("DOMContentLoaded", function () {
    const viewMoreButton = document.getElementById("view-more");
    const hiddenProducts = document.getElementById("hidden-products");
    const cart = document.getElementById("cart");

    viewMoreButton.addEventListener("click", function () {
        hiddenProducts.style.display = "block";
        viewMoreButton.style.display = "none";
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            
            // Create a new cart item element
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${name}</span>
                <span>$${price.toFixed(2)}</span>
                <button class="remove-from-cart">Remove</button>
            `;

            // Add the cart item to the cart
            cart.appendChild(cartItem);

            // Add a remove button event listener
            const removeButton = cartItem.querySelector(".remove-from-cart");
            removeButton.addEventListener("click", function () {
                cart.removeChild(cartItem);
            });
        });
    });
});
