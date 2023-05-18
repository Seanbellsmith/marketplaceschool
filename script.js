const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 7.99 },
  { id: 4, name: 'Product 4', price: 11.99 },
  { id: 5, name: 'Product 5', price: 4.99 },
  { id: 6, name: 'Product 6', price: 15.99 },
  { id: 7, name: 'Product 7', price: 6.99 },
  { id: 8, name: 'Product 8', price: 12.99 },
  { id: 9, name: 'Product 9', price: 10.99 },
];

const productList = document.getElementById('product-list');
const basketItems = document.getElementById('basket-items');
const totalElement = document.getElementById('total');
const basket = [];

// Display products on the webpage
products.forEach((product) => {
  const productBox = document.createElement('div');
  productBox.className = 'product-box';
  productBox.innerHTML = `<strong>${product.name}</strong><br>$${product.price.toFixed(2)}`;

  productBox.addEventListener('click', () => addToBasket(product));

  productList.appendChild(productBox);
});

// Function to calculate and display the total
function calculateTotal() {
  const total = basket.reduce((acc, product) => acc + product.price, 0);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to handle adding a product to the basket
function addToBasket(product) {
  basket.push(product);

  const listItem = document.createElement('li');
  listItem.innerText = product.name;

  basketItems.appendChild(listItem);

  calculateTotal();
}