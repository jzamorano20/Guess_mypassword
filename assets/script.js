var generateBtn = document.querySelector("#generate");

// intead of using concat to add to the string my tutor taught me to use += its the samething
function generatePassword() {
  // in the bottom we all the possible chioces from letters,numbers and special characters to be inculded when picking a password and the prompt will ask you want you would like to use.
  var alphabet ='abcdefghijklmnopqrstuvwxyz'
  var possiblepicks= '';

 var wantsUppercase = confirm('Would you like to include Uppercase letters?')
  if (wantsUppercase) {
    possiblepicks += alphabet.toLocaleUpperCase();
  }
 
 
  var wantsLowercase = confirm('Would you like to include Lowercase letters?')
  if (wantsLowercase) {
    possiblepicks += alphabet
  } 
 
  var wantsNumbers = confirm('Would you like to include Numbers?')
  if (wantsNumbers) {
    possiblepicks += '0123456789';
  }

  
  var wantsSymbols = confirm('Would you like to include Symbols?')
  if (wantsSymbols) {
    possiblepicks += '!@#$%^&*()_-+='
  }

  var characteramount = prompt("Enter how many characters you would like your password to be(must be between 8-128)")
  if (characteramount < 8 || characteramount > 128) {
    alert("Invalid character amount, please try again")
    characteramount = false
  }

  // possible characters that will be included from this selection if outcome is true 
  var options = {
    numbers: wantsNumbers = true,
    uppercase: wantsUppercase = true,
    lowercase: wantsLowercase = true,
    symbols: wantsSymbols = true,
    characterlength: characteramount
  }
  console.log(options)
  // will return a password with the characters given from the choices given and what you eanted inside
  var password = '';
  for (var i=0; i<options.characterlength; i++) {
    var randomIndex = Math.floor(Math.random()*possiblepicks.length)  
    var randomCharacter = possiblepicks[randomIndex];
    password+=randomCharacter;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);