// Enter your code here
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", function (event) {
  let number = input.value;

  function reverseString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i]; 
    }

    return newString; 
  }

  let reverse = reverseString(number);

  if (number.length == 8) {
    alert(reverse);
  } else if (number.length < 8) {
    alert("Number too short. Number must be 8 digits");
  } else {
    alert("Number too long. Number must be 8 digits");
  }

  input.value = "";

  event.preventDefault();
});
