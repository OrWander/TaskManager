//Draw in DOM inputs inside tag elements, wrapped in "outerDiv"
//also known as "card" parameter. 
//**fade-in is defined in here
function getCard(task, taskIndex) {
    if (typeof task !== `object`) return;

    const outerDiv = document.createElement("div");
    outerDiv.classList.add("addClassToCard", "card");
    outerDiv.style.width = "10rem";

    //Fade-in
    if (taskIndex === state.tasks.length - 1) {
        setTimeout(function () {
            outerDiv.classList.add("addClassToCardToTrans");
        }, 0);
    } else {
        outerDiv.classList.add("addClassToCardToTrans");
    }

    const buttonDiv = document.createElement("div");
    const hiddenButton = document.createElement("button");
    hiddenButton.classList.add("btn", "btn-danger", "deleteButtonCard", "d-none");
    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-x-circle");
    hiddenButton.append(icon);
    buttonDiv.append(hiddenButton);

    // Description
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("scrollDescription");

    const descriptionInput = document.createElement("p");
    descriptionInput.innerText = task.description;
    descriptionDiv.append(descriptionInput);

    // Color
    const priorityInput = document.createElement("div");
    priorityInput.innerHTML = task.priority;

    // Date
    let dateInput = document.createElement("span");
    dateInput.innerText = String(task.dueDate).replace(`T`, ", ");
    const dateDiv = document.createElement("div");
    dateDiv.className = "divDate_Hour";
    dateDiv.append(dateInput);

    // Department
    const departmentInput = document.createElement("p");
    departmentInput.innerText = task.department;
    departmentInput.style.marginBottom = "2px";

    outerDiv.append(descriptionDiv, priorityInput, departmentInput, buttonDiv, dateDiv);

    // Events
    outerDiv.addEventListener("mouseover", function () {
        hiddenButton.classList.remove("d-none");
    });
    outerDiv.addEventListener("mouseout", function () {
        hiddenButton.classList.add("d-none");
    });
    hiddenButton.addEventListener("click", function () {
        if (confirm('Are you sure?')) {
            removeTaskFromLocalStorage(task);
            outerDiv.innerHTML = null;
            outerDiv.classList.remove("card", "addClassToCard", "animate-flicker");
        }
    });
    return outerDiv;
}