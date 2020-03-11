const projects = document.querySelector(".projects");
const newProjectButton = document.querySelector(".new-project");
const newTaskButton = document.querySelector(".new-task");
let container = document.querySelector(".container");
const projectList = document.querySelector(".project-list");
const toDoList = document.querySelector(".to-do-list");
const completedList = document.querySelector(".completed-list");




const showProjectForm = () => {
    newProjectButton.disabled = true;

    let formContainer = document.createElement("div");
    formContainer.id = "form-container";

    let form = document.createElement("div");
    form.id = "project-form";

    let projectTitle = document.createElement("input");
    projectTitle.type = ("text", "text");
    projectTitle.id = "project-title";
    projectTitle.placeholder = "Title";
    projectTitle.maxLength = "75";

    let btnDiv = document.createElement("div");

    let updateBtn = document.createElement("button");
    updateBtn.id = "update-btn";
    updateBtn.appendChild(document.createTextNode("Create"));
    btnDiv.appendChild(updateBtn);

    let cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel-btn";
    cancelBtn.appendChild(document.createTextNode("cancel"));
    btnDiv.appendChild(cancelBtn);

    form.appendChild(projectTitle);
    form.appendChild(btnDiv);
    formContainer.appendChild(form);
    container.appendChild(formContainer);
}

 
const renderProject = (project) => {
    const cell = document.createElement("td");
    cell.innerText = project.title;
    cell.setAttribute("class", "project");
    const row = document.createElement("tr");
    row.appendChild(cell);
    projectList.appendChild(row);
}

const select = () => {
    let projects = Array.from(document.getElementsByClassName("project"));
    projects.forEach(project => {
        if (project.classList.contains("selected")) {
            project.classList.remove("selected");
        }
    })
    projects[projects.length - 1].classList.add("selected");
}

const removeProjectForm = () => {
    container.removeChild(container.lastChild);
    newProjectButton.disabled = false;
}

const showTaskForm = () => {
    newTaskButton.disabled = true;

    let formContainer = document.createElement("div");
    formContainer.id = "form-container";

    let form = document.createElement("div");
    form.id = "project-form";

    let projectTitle = document.createElement("input");
    projectTitle.type = ("text", "text");
    projectTitle.id = "task-title";
    projectTitle.placeholder = "Title";
    projectTitle.maxLength = "75";

    let btnDiv = document.createElement("div");

    let updateBtn = document.createElement("button");
    updateBtn.id = "update-btn";
    updateBtn.appendChild(document.createTextNode("Create"));
    btnDiv.appendChild(updateBtn);

    let cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel-btn";
    cancelBtn.appendChild(document.createTextNode("cancel"));
    btnDiv.appendChild(cancelBtn);

    form.appendChild(projectTitle);
    form.appendChild(btnDiv);
    formContainer.appendChild(form);
    container.appendChild(formContainer);
}

const removeTaskForm = () => {
    container.removeChild(container.lastChild);
    newTaskButton.disabled = false;
}

const displayTasks = (task) => {
    toDoList.classList.add(".table");
    newTaskButton.disabled = false;
    
    let cell = document.createElement("td");
    cell.innerText = task.title;
    cell.setAttribute("class", "task");
    const row = document.createElement("tr");
    row.appendChild(cell);
    toDoList.appendChild(row);
}



export {select, showProjectForm, renderProject, removeProjectForm, displayTasks, showTaskForm, removeTaskForm}