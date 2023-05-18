document.getElementById('sell-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform sell logic here
  // ...

  // Show notification
  showNotification('Item listed');

  // Redirect to index page after 5 seconds
  setTimeout(function() {
    window.location.href = 'index.html';
  }, 5000);
});

// Function to show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(function() {
    document.body.removeChild(notification);
  }, 3000);
}