// Enter your code here
const results = document.getElementById("results");



for(let i = 1; i <= 100; ++i) {
    const newItem = document.createElement("p");
    

    if(i % 5 == 0 && i % 3 == 0) {
        newItem.innerText = "fizz buzz"

    } else if (i % 5 == 0 && i % 3 != 0) {
        newItem.innerText = "buzz"

    } else if (i % 3 == 0) {
        newItem.innerText = "fizz"
    } else {
        newItem.innerText = `${i}`;
    }

    //append
    results.appendChild(newItem);
}