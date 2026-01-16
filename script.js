let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function() {
    // CHECK: Is the input empty?
    if (input.value.trim() === "") {
        alert("Please enter a task!"); // Show the alert
        return; // 'return' stops the function here, so no empty task is added
    }

    let item = document.createElement("li");
    let delbtn = document.createElement("button");
    
    // Note: It's safer to set text content like this so the button text doesn't get overwritten
    item.innerText = input.value; 
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});