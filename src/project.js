function Project(title, status) {
    this.title = title;
    this.status = status;
    this.tasks = [];
    this.addTask = (task) => {
        this.tasks.push(task);
    }
}

export {Project}