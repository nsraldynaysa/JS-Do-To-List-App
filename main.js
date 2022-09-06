// Setting Up Variables 
let theInput = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// Focus on input field
window.onload = function () {
    theInput.focus();
};

// Adding the task
addButton.onclick = function () {

    // If input is empty
    if (theInput.value === '') {

    } else {

        let noTasksMsg = document.querySelector(".no-tasks-message");

        //Check If Span With No Tasks Message Is Exist
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {
            
            // Remove No Tasks Message 
            noTasksMsg.remove();
        }

        // Create Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button 
        let deleteElement = document.createElement("span");

        // Create The span Text
        let text = document.createTextNode(theInput.value);

        // Create The Delete Button Text
        let deleteText = document.createTextNode("Delete");

        //Add Text To Span
        mainSpan.appendChild(text);
         
        // Add Class To Span
        mainSpan.className = 'task-box';

        // Add Text To Delete Button
        deleteElement.appendChild(deleteText);

        // Add Class To Delete Button 
        deleteElement.className = 'delete';

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);

        // Add The Task to the Container 
        tasksContainer.appendChild(mainSpan);

        // empty the input
        theInput.value = '';

        theInput.focus();

        // Calculeta Tasks
        calculateTasks();
    }
};

document.addEventListener('click', function (e) {

    // Delete Task
    if (e.target.className == 'delete') {

        // Remove Current Task
        e.target.parentNode.remove();

        // Check Number Of Tasks Insde The Container
        if (tasksContainer.childElementCount == 0) {

            createNoTasks();

        }
    }

    // Finish Task 
    if (e.target.classList.contains('task-box')) {
         
        // Toggel Class finished
        e.target.classList.toggle("finished");
    }

    // Calculeta Tasks
    calculateTasks();
});

// Function To Create No Tasks Message
function createNoTasks() {
    let msgSpan = document.createElement("span");

    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);

    // Add Classes To Message Span
    msgSpan.className = 'no-tasks-message';

    // Append The Message Span Element
    tasksContainer.appendChild(msgSpan);
}

// Function To Calculate Tasks
function calculateTasks() {

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate Completad Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}









