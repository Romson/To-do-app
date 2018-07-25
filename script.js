<<<<<<< HEAD
=======
// SO2RandellDawson tyvm m8
>>>>>>> 6fab40bf2debeaa3c5a3ef38efe0125fa4fef80a
// checking for false below prevents the change event from also firing
addTaskButton.addEventListener('click', () => false ? addTask() : 'do not fire change event');

inputField.addEventListener('change', () => addTask());

clearTaskButton.addEventListener('click', () => clearTask());

<<<<<<< HEAD
taskDone.addEventListener('click', () => taskDone());

// var taskDone = document.document.querySelector("input[type='checkbox']");

// taskDone.addEventListener('click', function(){
//     checkbox.newListItem.style.textDecoration = "line-through";
// });

function addTask() {
    var newListItem         = document.createElement('li');
    newListItem.innerHTML   = inputField.value;
    listItems.appendChild(newListItem);
    // add checkbox after newListItem has been appended
    var checkbox            = document.createElement("input");
    checkbox.type           = "checkbox";
    checkbox.id             = "taskDone";
    newListItem.appendChild(checkbox);
    inputField.value = ''; // reset field value to blank for next entry
=======
function addTask() {
  var newListItem = document.createElement('li');
  newListItem.innerHTML = inputField.value;
  listItems.appendChild(newListItem);
  inputField.value = ''; // reset field value to blank for next entry
>>>>>>> 6fab40bf2debeaa3c5a3ef38efe0125fa4fef80a
}

  /* remove all childNodes after cleartaskButton has been clicked. 
Got this code from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while */
function clearTask() {
<<<<<<< HEAD
    while (listItems.hasChildNodes()) {
        listItems.removeChild(listItems.firstChild);
    }
}

// line-through newListItem after checkbox click
function taskDone() {
    checkbox.newListItem.style.textDecoration = "line-through"; // childNode.parentNode ?
}
=======
  while (listItems.hasChildNodes()) {
    listItems.removeChild(listItems.firstChild);
  }
}
>>>>>>> 6fab40bf2debeaa3c5a3ef38efe0125fa4fef80a
