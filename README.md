# Local Storage

## Sign-up form that successfully submits an email and password. 

```
Email and password saves to the localStorage and renders the last submission to the page.
```

* In the `renderLastRegistered()` function:
  * Retrieve the last email and password from localStorage.
  * If the last registered is null, returning this function.
  * Otherwise, set the text of the `userEmailSpan` and `userPasswordSpan` to their corresponding values from localStorage.

* In the `signUpButton` event listener:
  * Save the email and password to localStorage.
  * Render the last registered email and password.