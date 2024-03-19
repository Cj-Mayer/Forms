// JavaScript code for form validation
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the form element
  var form = document.getElementById('myForm');

  // Add event listener to the form on submit
  form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Retrieve the input field value
      var inputValue = document.getElementById('inputField').value;

      // Regular expression pattern for alphanumeric input
      var alphanumericPattern = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (!alphanumericPattern.test(inputValue)) {
          // Invalid input: display error message
          var errorMessage = document.createElement('p');
          errorMessage.textContent = 'Error: Input must be alphanumeric';
          form.appendChild(errorMessage);
      } else {
          // Valid input: remove any existing error message
          var existingErrorMessage = form.querySelector('p');
          if (existingErrorMessage) {
              existingErrorMessage.remove();
          }

          // Display confirmation and submit the form (this will not actually submit anything)
          alert('Valid Input: Form Submited!');
      }
  });
});
