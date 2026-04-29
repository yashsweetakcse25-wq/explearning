let cartCount = localStorage.getItem("cartCount") || 0;
document.getElementById("cart-count").innerText = cartCount;

let selectedSize = "";
let selectedColor = "";

function selectSize(size) {
    selectedSize = size;
    document.getElementById("size-msg").innerText = "Selected Size: " + size;
}

function selectColor(color) {
    selectedColor = color;
    document.getElementById("color-msg").innerText = "Selected Color: " + color;
}

function addToCart() {
    if (selectedSize === "" || selectedColor === "") {
        alert("Select size & color first!");
        return;
    }

    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    document.getElementById("cart-count").innerText = cartCount;

    alert("Added to cart!");
}
