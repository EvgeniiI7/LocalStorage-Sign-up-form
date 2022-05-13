var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userEmailSpan = document.querySelector('#user-email'); // purpose of this just grab the selector
var userPasswordSpan = document.querySelector('#user-password');

// this method above  responsible only for retrieving(izvlecat) the value to the localStorage and then displaying it
function renderLastRegistered() {
  // TODO: Retrieve the last email and password from localStorage
  var email = localStorage.getItem('email');
  var password = localStorage.getItem('password');

  // TODO: If they are null, return early from this function
  if(!email && !password) { // if email null and password null will return the function
    return
  }
  // TODO: Otherwise set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
  userEmailSpan.textContent = email;   // textContent very useful for taking the actual value of the tags and then manipulate 
  userPasswordSpan.textContent = password;
}

renderLastRegistered();

// function to display a message
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

signUpButton.addEventListener('click', function(event) {
  event.preventDefault();

  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    // TODO: Save email and password to localStorage
    // TODO: Render the last registered email and password
    localStorage.setItem("email", email); // check the html 
    localStorage.setItem("password", password);

    renderLastRegistered(); // call this function that responsible to show the context on line 19,20
  }
});
