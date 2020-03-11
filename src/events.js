import * as render from "./render";
import {Project} from "./project";
import {ToDoItem} from "./to-do-item";

    function eventController() {
        
        const launchPoint = (() => {
            // const project = document.querySelector(".project");
            // project.addEventListener('click', render.displayTasks);

            const showFormButton = document.querySelector(".new-project");
            showFormButton.addEventListener("click", () => {
                showProjectForm();                
            });
        })();

        const showProjectForm = () => {
            render.showProjectForm();
            const createProjectButton = document.querySelector("#update-btn");
            const cancelButton = document.querySelector("#cancel-btn");
           
            createProjectButton.addEventListener("click", () => {
                createProject();
                render.removeProjectForm();
            });
            cancelButton.addEventListener("click", render.removeProjectForm);
        }

        const createProject = () => {
            const title = document.querySelector("#project-title");
            let project = new Project(`${title.value}`, "unfinished");
            render.renderProject(project);
            render.select();
            render.displayTasks(project);
            taskManager(project);
        }

        
        // const displayTasks = (project) => {
        //     // let allProjects = Array.from(document.getElementsByClassName("project"));

        //     // allProjects.forEach(project => {
        //             project.addEventListener("click", () => {
        //             project.classList.add("selected");
        //             render.displayTasks(project);
        //             showTaskForm(project);
        //         // });
        //     });
        // }

        const taskManager = (project) => {
            const taskButton = document.querySelector(".new-task");
            taskButton.addEventListener("click", () => {
                showTaskForm(project);
            })
        } 

        const showTaskForm = (project) => {
            render.showTaskForm();
            const createTaskButton = document.querySelector("#update-btn");
            createTaskButton.addEventListener("click", () => {
                createTask(project);
                render.removeProjectForm();
            });
            
            const cancelButton = document.querySelector("#cancel-btn");
            cancelButton.addEventListener("click", render.removeTaskForm);
        }

        const createTask = (project) => {
            const title = document.querySelector("#task-title");
            let task = new ToDoItem(`${title.value}`);
            project.addTask(task);
            render.displayTasks(task);
        }
    }

export {eventController}