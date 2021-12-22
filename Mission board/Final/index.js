//Global object + targeting elements
const DOM = {
    formiRef: document.querySelector("#formi"),
    taskDescriptionRef: document.querySelector("#taskDescription"),
    taskDueDateRef: document.querySelector("#taskDueDate"),
    departmentRef: document.querySelector("#taskDepartment"),
    taskPriorityRef: document.querySelector("#taskPriority"),
    divDevelopmentRef: document.querySelector("#divDevelopment"),
    divDesignRef: document.querySelector("#divDesign"),
    divMarketingRef: document.querySelector("#divMarketing"),
};

//Global current state
const state = {
    tasks: []
};

//Upload from LS (if DB exists)
getFromLocalStorage();

/////////////////////////////////////////////////////
// Event Handlers
/////////////////////////////////////////////////////

//Add task
function addTask() {
    const task = {
        id: Math.ceil(Math.random() * 999),
        description: DOM.taskDescriptionRef.value,
        dueDate: DOM.taskDueDateRef.value,
        department: DOM.departmentRef.value,
        priority: DOM.taskPriorityRef.value,
    }
    state.tasks.push(task);
    setLocalStorage();
    drawWhenReloading();
}

//Validation
$(function () {
    $("form[name='registration']").validate({
        rules: {
            description: "required",
            due_date: "required",
            department: "required",
            priority: "required",
        },
        messages: {
            description: "task description is missing!",
            due_date: "what is the task due date?",
            department: "choose department for execution!",
            priority: "low/medium/high - name it!"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    setLocalStorage();
});

//Reset form
function resetForm() {
    DOM.formiRef.reset();
}
/////////////////////////////////////////////////////
// 
/////////////////////////////////////////////////////
//Clear DOM container
function clearDomContainer() {
    DOM.divDevelopmentRef.innerHTML = "";
    DOM.divDesignRef.innerHTML = "";
    DOM.divMarketingRef.innerHTML = "";
}

//Draw in DOM (per div department - tnx :))
function drawWhenReloading() {
    clearDomContainer();
    addTitlesToOuterDiv();
    for (let index = 0; index < state.tasks.length; index++) {
        let currentTask = state.tasks[index];
        const card = getCard(currentTask, index);
        if (!card) return;
        switch (currentTask.department) {
            case "Development":
                DOM.divDevelopmentRef.append(card)
                break;
            case "Design":
                DOM.divDesignRef.append(card)
                break;
            case "Marketing":
                DOM.divMarketingRef.append(card)
                break;

            default:
                DOM.divDevelopmentRef.append(card)
                break;
        }
    }
}