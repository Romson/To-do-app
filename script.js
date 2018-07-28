// checking for false below prevents the change event from also firing
addTaskButton.addEventListener('click', () => false ? addTask() : 'do not fire change event');

inputField.addEventListener('change', () => addTask());

clearTaskButton.addEventListener('click', () => clearTask());

// event LI checkBox added
listItems.addEventListener("click", function(){
    checkClicked();
});

function checkClicked() {
    // get checkbox
    var checkBox = document.querySelector("input[type=checkbox]");
    // get listItem
    var listItem = document.querySelector(".newListItem");
    // if checkbox is checked line-through listItem
    if (checkBox.checked == true) {
        listItem.style.textDecoration = "line-through";
    }
    else {
        listItem.style.textDecoration = "none";
    }
}



function addTask() {
    var newListItem = document.createElement('li');
    newListItem.innerHTML = inputField.value;
    listItems.appendChild(newListItem);
    newListItem.classList.add("newListItem");
    // add checkbox after newListItem has been appended
    var checkbox            = document.createElement("input");
    checkbox.type           = "checkbox";
    checkbox.classList.add("taskDone");
    newListItem.appendChild(checkbox);
    inputField.value = ''; // reset field value to blank for next entry
}

//* remove all childNodes after cleartaskButton has been clicked. 
// Got this code from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while */
function clearTask() {
    while (listItems.hasChildNodes()) {
        listItems.removeChild(listItems.firstChild);
    }
}

// line-through newListItem after checkbox click
function taskDone() {
    checkbox.newListItem.style.textDecoration = "line-through"; // childNode.parentNode ?
}