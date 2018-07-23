// declare variables for inputField, addTaskButton, clearTaskButton and UL
var input                   = document.getElementById("inputField");
var addTaskButton           = document.getElementById("addTask");
var clearTaskButton         = document.getElementById("clearTask");
var ulList                  = document.getElementById("listItems");

// listen for changes in inputField and invoke addTask();
input.addEventListener("change", function(){
    addTask();
})

// listen for clicks on addTaskButton and invoke addTask();
addTaskButton.addEventListener("click", function(){
    addTask();
})

// listen for clicks on clearTaskButton and invoke clearTask();
clearTaskButton.addEventListener("click", function(){
    clearTask();
})

// addTask function with code to be executed upon invocation
function addTask(){
    // add inputField value to new variable
    var newTodo             = input.value;
    // create new LI after inputField value captured in var newTodo
    var newListItem         = document.createElement("li");
    // add newly created LI to innerHTML
    newListItem.innerHTML   += newTodo;
    // show newly created LI on front-end to user
    ulList.appendChild(newListItem);
    // inputField value is cleared and ready for new input
    input.value             = "";
}

// clearTask function with code to be executed upon invocation
function clearTask(){
    // remove all childNodes after cleartaskButton has been clicked. Got this code from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while
    while (ulList.hasChildNodes()) {   
        ulList.removeChild(ulList.firstChild);
    }
}