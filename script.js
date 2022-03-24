// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var caracteres = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZ1234567890!@#$%^&*()";
  var passwordlengt = 10;
  var password = "";

  for (var i = 0; i < passwordlengt; i++){

    var randomNumber = Math.floor(Math.random()*caracteres.length);
    password += caracteres.substring(randomNumber,randomNumber +1);
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
