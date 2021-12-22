/////////////////////////////////////////////////////
// Database
/////////////////////////////////////////////////////
//Set
function setLocalStorage() {
    localStorage.setItem("keyState", JSON.stringify(state.tasks));
}

//Get
function getFromLocalStorage() {
    try {
        const DB = localStorage.getItem('keyState');
        state.tasks = (DB != null) ? JSON.parse(DB) : [];
    } catch (error) {
        throw alert(error);
    }
    drawWhenReloading();
}

//Remove 
function removeTaskFromLocalStorage(task) {
    state.tasks = state.tasks.filter(function (currentTask) {
        return currentTask.id != task.id;
    });
    setLocalStorage();
}

//Clear
function deleteTasks() {
    if (confirm('You cannot undo this action')) {
        localStorage.clear();
        state.tasks.splice(0);
    }
    setLocalStorage();
    drawWhenReloading();
}