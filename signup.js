function switchForm(className, e){
    const allForm = document.querySelectorAll('form');
    const form = document.querySelector(`form.${className}`);

    allForm.forEach(item=>{
        item.classList.remove('active');
    })
    form.classList.add('active');
}

const username1 = document.querySelector('#username')
const password1 = document.querySelector('#password')
const passwordE2 = document.querySelector('#password2')
const form1  =document.querySelector('#login')


form1.addEventListener("submit", function(e){
    e.preventDefault();


    let isUsernameValid = checkUsername(),
    isPasswordValid = checkPassword();
    
    let isFormValid =
    isUsernameValid && isPasswordValid 
    
    if (isFormValid) {
    }
    });
function checkUsername(){
        let valid = false;
    const min = 3,
        max = 25;
    const username = username1.value.trim();
    if (!isRequired(username)) {
        showError(username1, "Username cannot be blank.");
    } else if (!isBetween(username.length, min, max)) {
        showError(
        username1,
        `Username must be between ${min} and ${max} characters.`
        );
    } else {
        showSuccess(username1);
        valid = true;
    }
    return valid;
    }

let isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

  let showError = (input, message) => {
    let formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
  
    const error = formField.querySelector("small");
    error.textContent = message;
  };
  
  const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
  
    formField.querySelector("small").textContent = "";
  };
  const isPasswordValid = (password) => {
    const re = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
    return re.test(password);
  };
  
  function checkPassword() {
   
    const password = password1.value.trim();
    if ( username1.value == "admin" && password1.value == "Admin#123"){
      alert ("Login successfully");
      window.location = "dashboard.html"; // Redirecting to other page.
      return false;
      }
    if (!isRequired(password)) {
      showError(password1, "You have to set a password");
    } else if (!isPasswordValid(password)) {
      showError(
        password1,
        "Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character "
      );
    } else {
      showSuccess(password1);
      valid = true;

    }
    return true;
    
  }
  
  


// form2
 const form2 = document.querySelector('#register')
 const username2 = document.querySelector('#username1')
 const password2 = document.querySelector('#password1')
 const confirmPasswordE1 = document.querySelector('#password2')
  
form2.addEventListener('submit', function(e){
    e.preventDefault();
    let isUsernameValid1 = checkUsername1(),
    isPasswordValid2 = checkPassword1(),
    isConfirmpasswordvalid1=checkConfirmPassword();
    
    let isFormValid =
    isUsernameValid1 && isPasswordValid2 &&  isConfirmpasswordvalid1 
    
    if (isFormValid) {
    }

})

function checkUsername1(){
    let valid = false;
    const min = 3,
        max = 25;
    const username = username2.value.trim();
    if (!isRequired(username)) {
        showError(username2, "Username cannot be blank.");
    } else if (!isBetween(username.length, min, max)) {
        showError(
        username2,
        `Username must be between ${min} and ${max} characters.`
        );
    } else {
        showSuccess(username2);
        valid = true;
    }
    return valid;
    }

function checkPassword1(){
    
    const password = password2.value.trim();
    if (!isRequired(password)) {
      showError(password2, "You have to set a password");
    } else if (!isPasswordValid(password)) {
      showError(
        password2,
        "Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character "
      );
    } else {
      showSuccess(password2);
      valid = true;
    }
    return true;
}
function checkConfirmPassword() {
    let valid = false;
    const passwordCheck = confirmPasswordE1.value.trim();
    if (!isRequired(passwordCheck)) {
      showError(confirmPasswordE1, "Confirm to proceed");
    } else if (!passwordMatch()) {
      showError(confirmPasswordE1, "Not matching");
    } else {
      showSuccess(confirmPasswordE1);
      valid = true;
    }
    return valid;
  }
  const passwordMatch = () => {
    if (password2.value == confirmPasswordE1.value) {
      return true;
    }
  };

