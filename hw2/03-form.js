// Enter your code here
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
//const newsletter = document.getElementById("checkbox")[0].checked;




form.addEventListener("submit", function (event) {
  let nameVal = name.value;
  console.log(`name: ${nameVal}`);

  let emailVal = email.value;
  console.log(`email: ${emailVal}`);

  let textareaVal = textarea.value;
  console.log(`comments: ${textareaVal}`);

  // let newsletterVal = newsletter.value[0];
  // console.log(`comments: ${newsletterVal}`);

  if (document.getElementById('checkbox').checked) {
    console.log("newsletter: on");
  } else {
    console.log("newsletter: off");
  }

  event.preventDefault();
});

