// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable for length of password according to user input
  let userInputLength = parseInt(
    prompt(
      "Please enter the number for how many characters long you want the password to be"
    )
  );
  // Creating alerts so that if user inputs invalid data, such as putting non numbers into the number prompt, the alert informs the user they need to enter a valid input
  if (isNaN(userInputLength) === true) {
    alert("Please input a number for password length.");
    return;
  }

  if (userInputLength < 10) {
    alert("Password must be at least 10 characters long.");
    return;
  }

  if (userInputLength > 64) {
    alert("Password must no more than 64 characters long.");
    return;
  }

  // Using confirms to generate boolean results based on if user wants lowercase, uppercase, numbers or special characters
  let userInputLowercase = confirm(
    "Would you like password to include lowercase characters?  Click OK = yes, click cancel = no!"
  );

  let userInputUppercase = confirm(
    "Would you like password to include uppercase characters?  Click OK = yes, click cancel = no!"
  );

  let userInputNumbers = confirm(
    "Would you like password to include numeric characters?  Click OK = yes, click cancel = no!"
  );
  let userInputSpecials = confirm(
    "Would you like password to include special characters? Click OK = yes, click cancel = no!"
  );

  // Gives user a warning via alert that they did not confirm any type of character so password cannot be generated
  if (
    userInputLowercase === false &&
    userInputUppercase === false &&
    userInputNumbers === false &&
    userInputSpecials === false
  ) {
    alert("Password must contain at least one type of character.");
    return;
  }

  let passwordOptions = {
    length: userInputLength,
    hasLowerCase: userInputLowercase,
    hasUpperCase: userInputUppercase,
    hasNumbers: userInputNumbers,
    hasSpecialCharacters: userInputSpecials,
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  console.log(randomElement);
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

  // Calling Password Options function and assigning to variable called options
  console.log(options);

  let result = [];

  let possibleCharacter = [];

  let guaranteedCharacter = [];

  if (options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters));
  }

  if (options.hasLowerCase) {
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCase) {
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters));
  }

  if (options.hasNumbers) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters));
  }

  //Printing to console the possible and guaranteed characters to ensure code works correctly
  console.log("Possible characters are" + possibleCharacter);
  console.log("Guaranteed characters are" + guaranteedCharacter);

  for (let index = 0; index < options.length; index++) {
    var generated = getRandom(possibleCharacter);
    console.log("Generated is :" + generated);
    result.push(generated);
  }

  console.log("Result is" + result);

  return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
