let selectedColor = "";
let selectedSize = "";

// Select color or size
function selectOption(btn, type) {

    // remove active from same group
    let parent = btn.parentElement;
    let buttons = parent.querySelectorAll(".option-btn");

    buttons.forEach(b => b.classList.remove("active-option"));

    btn.classList.add("active-option");

    if (type === "color") {
        selectedColor = btn.innerText;
    } else {
        selectedSize = btn.innerText;
    }
}

// Add to cart validation
function addToCart() {
    if (selectedColor === "" || selectedSize === "") {
        alert("Please select color and size first!");
        return;
    }
    function selectOption(btn, type) {
    let parent = btn.parentElement;
    let buttons = parent.querySelectorAll(".option-btn");

    buttons.forEach(b => b.classList.remove("active-option"));

    btn.classList.add("active-option");
}

function addToCart() {
    alert("Added to cart!");
}

    alert("Added to cart!\nColor: " + selectedColor + "\nSize: " + selectedSize);
}
