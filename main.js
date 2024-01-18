// Get reference to the input box and the list container in the HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item and set its innerHTML to the input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Create a close (delete) button (span) for the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        // Append the close button to the list item
        li.appendChild(span);
    }

    // Clear the input box value
    inputBox.value = "";

    // Save the updated task list to local storage
    saveData();
}

// Event listener for clicks on the list container (delegated to list items and close buttons)
listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class for the clicked list item
        e.target.classList.toggle("checked");

        // Save the updated task list to local storage
        saveData();
    }
    // Check if the clicked element is a close button (span)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent list item when the close button is clicked
        e.target.parentElement.remove();

        // Save the updated task list to local storage
        saveData();
    }
}, false);

// Function to save the current task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to display tasks on page load
showTask();
