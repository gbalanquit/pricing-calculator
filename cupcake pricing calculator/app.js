// what I need from the DOM
const priceInput = document.querySelector("[name=price]");
const quantityInput = document.querySelector("[name=quantity]");
const total = document.querySelector(".total");
const quantityLabel = document.querySelector(".quantity-label");

// create the functions
function calculateCupcakesCost() {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const cost = price * quantity;
  console.log(cost);
  total.innerText = "$" + cost.toFixed(2);
}

function updateQuantityLabel() {
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}

// on first run
calculateCupcakesCost();

// add event listener
priceInput.addEventListener("input", calculateCupcakesCost);
quantityInput.addEventListener("input", calculateCupcakesCost);
quantityInput.addEventListener("input", updateQuantityLabel);
