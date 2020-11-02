// Enter your code here
const divArray = document.querySelectorAll("div");
const widthDiv = divArray[0];
const heightDiv = divArray[1];

window.setInterval(function () {
  let width = window.innerWidth;
  let height = window.innerHeight;
  widthDiv.innerHTML = `${width}`;
  heightDiv.innerHTML = `${height}`;
}, 100);
