const basketItemsParam = new URLSearchParams(window.location.search).get('items');
const basketItems = basketItemsParam ? JSON.parse(decodeURIComponent(basketItemsParam)) : [];

const basketList = document.getElementById('basket-list');
const totalElement = document.getElementById('total');
const payButton = document.getElementById('pay-button');
const clearButton = document.getElementById('clear-button');
const returnButton = document.getElementById('return-button');

// Function to calculate and display the total
function calculateTotal() {
  const total = basketItems.reduce((acc, item) => acc + item.price, 0);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to handle paying
function pay() {
  // Perform payment logic here
  // ...
  
  // Show payment success message
  showPaymentSuccessMessage();
  
  // Clear the basket and update the page
  clearBasket();
  updatePage();
  
  // Redirect to the index page after 5 seconds
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 5000);
}

// Function to handle clearing the basket
function clearBasket() {
  basketItems.length = 0; // Clear the basket items array
}

// Function to update the page with the latest basket state
function updatePage() {
  basketList.innerHTML = ''; // Clear the basket list

  // Display updated basket items on the webpage
  basketItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerText = item.name;
    basketList.appendChild(listItem);
  });

  calculateTotal();
}

// Function to show the payment success message
function showPaymentSuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.classList.add('payment-success-message');
  successMessage.textContent = 'Payment Successful';

  document.body.appendChild(successMessage);
}

// Event listener for pay button
payButton.addEventListener('click', () => {
  if (basketItems.length === 0) {
    alert('Your basket is empty. Add some items before proceeding to payment.');
    return;
  }

  // Add your payment logic here
  pay();
});

// Event listener for clear basket button
clearButton.addEventListener('click', () => {
  if (basketItems.length === 0) {
    alert('Your basket is already empty.');
    return;
  }

  const confirmation = confirm('Are you sure you want to clear your basket?');
  if (confirmation) {
    clearBasket();
    updatePage();
  }
});

// Event listener for return button
returnButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

updatePage(); // Call updatePage() to display the basket items initially