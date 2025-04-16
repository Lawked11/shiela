document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to all read-more buttons
  const buttons = document.querySelectorAll('.read-more-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Find the corresponding extra content
      const extraContent = this.nextElementSibling;

      // Toggle the extra content visibility
      if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        this.textContent = 'Read Less'; // Change the button text
      } else {
        extraContent.style.display = 'none';
        this.textContent = 'Read More'; // Change the button text back
      }
    });
  });
});



function sendMessage(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Get the form data
  const name = event.target[0].value;
  const email = event.target[1].value;
  const message = event.target[2].value;

  // Show success message
  const messageElement = document.getElementById('message');
  messageElement.textContent = 'Your message has been sent successfully!';
  messageElement.classList.add('show');

  // Hide the message after 1 second (1000 milliseconds)
  setTimeout(() => {
    messageElement.classList.remove('show');
  }, 2000); // Remove the message after 1 second

  // Optionally, you can reset the form after submission
  event.target.reset();
}
