
const form  = document.getElementById("user-input");

function signupHandler(event){
  event.preventDefault();
  const userNameInput = document.getElementById('username');
  const enteredUsername = userNameInput.value;

  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
        alert('Iusername not be empty!');
        return;
      }
      if (enteredPassword.trim().length <= 5) {
        alert('password has to be six characters or longer.');
        return;
      }

        const user = {
    userName: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log('Hi i am' + user.userName);
}

form.addEventListener('submit', signupHandler);