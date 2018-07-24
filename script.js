// SO2RandellDawson tyvm m8
// checking for false below prevents the change event from also firing
addTaskButton.addEventListener('click', () => false ? addTask() : 'do not fire change event');

inputField.addEventListener('change', () => addTask());

clearTaskButton.addEventListener('click', () => clearTask());

function addTask() {
  var newListItem = document.createElement('li');
  newListItem.innerHTML = inputField.value;
  listItems.appendChild(newListItem);
  inputField.value = ''; // reset field value to blank for next entry
}

  /* remove all childNodes after cleartaskButton has been clicked. 
Got this code from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while */
function clearTask() {
  while (listItems.hasChildNodes()) {
    listItems.removeChild(listItems.firstChild);
  }
}
