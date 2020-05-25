// import stylesheets
import './view/css/style.css';

// import view modules
import home from './view/home';
import footer from './view/footer';

// import controller modules
import Project from './controller/project';
import Todo  from './controller/todo';

let projectList = [];

// loads home
const main = document.querySelector('#content');
main.insertAdjacentHTML('beforeEnd', '<div class="activeInfo"></div>');
main.insertAdjacentHTML('beforeEnd', footer);
const activeInfo = document.querySelector('.activeInfo');
activeInfo.innerHTML = home;

// add burtton renders
const btnAddProject = document.getElementById('addProject');
btnAddProject.onclick = () => { addProject(); };

const btnAddTodo = document.getElementById('addTodo');
btnAddTodo.onclick = () => { addTodo(); };

function addProject() {
  const projectTitle = document.getElementById('new-project-title').value;
  const newProject = new Project(projectTitle);
  projectList.push(newProject);

  renderProjects(projectList);
}

function removeProject(project) {
  projectList.splice((project.id - 1), 1);
  alert(project.title + " deleted")
  renderProjects(projectList);
}

function addTodo() {
  const todoTitle = document.getElementById('new-todo-title').value;
  const todoDueDate = document.getElementById('new-todo-dueDate').value;
  const todoPriority = document.getElementById('new-todo-priority').value;
  const dotoDescription = document.getElementById('new-todo-description').value;

  const todo = new Todo(todoTitle, todoDueDate, todoPriority, dotoDescription);
  todotList.push(todo);

  renderProjects(projectList);
}

function renderProjects(projectList) {
  const projectTable = document.getElementById('project-table');
  projectTable.innerHTML = '';

  projectList.forEach((project) => {
    const tableRow = projectTable.insertRow();

    const indexCol = document.createElement('th');
    indexCol.innerHTML = project.id;

    tableRow.appendChild(indexCol);

    const titleCol = tableRow.insertCell(1);
    titleCol.innerHTML = project.title;
    titleCol.style.cursor = "pointer";
    titleCol.addEventListener('click', function () {
      renderTodos(projectList[project.id - 1])
    });

    const editCol = tableRow.insertCell(2);
    const editButton = document.createElement('button');
    editButton.innerText = "edit";
    editButton.classList.add("btn", "btn-outline-secondary", "btn-sm");
    editButton.addEventListener('click', function (e) {
      //renderProjects(projectList);
    });
    editCol.appendChild(editButton);

    const deleteCol = tableRow.insertCell(3);
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.classList.add("btn", "btn-outline-danger", "btn-sm");
    removeButton.addEventListener('click', function (e) {
      removeProject(project);
    });
    deleteCol.appendChild(removeButton);
  });
}

function renderTodos(project) {
  const todoTable = document.getElementById('todo-table');
  todoTable.innerHTML = '';

  document.getElementById('todo-table-header').style.display = "block";

  project.todos.forEach((todo) => {

    const tableRow = todoTable.insertRow();
    const indexCol = document.createElement('th');

    indexCol.innerHTML = todo.id;
    tableRow.appendChild(indexCol);

    const titleCol = tableRow.insertCell(1);
    titleCol.innerHTML = todo.title;

    const dueDateCol = tableRow.insertCell(2);
    dueDateCol.innerHTML = todo.dueDate;

    const priorityCol = tableRow.insertCell(3);
    priorityCol.innerHTML = todo.priority;

    const descriptionCol = tableRow.insertCell(4);
    descriptionCol.innerHTML = todo.description;
  });
}

function populateProjects() {
  const todo01P01 = new Todo("todo-01-p1", "01/01/2021", "low", "this is my todo 01");
  const todo02P01 = new Todo("todo-02-p1", "01/01/2022", "normal", "this is my todo 02");
  const todo03P01 = new Todo("todo-03-p1", "01/01/2022", "important", "this is my todo 03");

  const todo01P02 = new Todo("todo-01-p2", "01/01/2021", "low", "this is my todo 01");
  const todo02P02 = new Todo("todo-02-p2", "01/01/2022", "normal", "this is my todo 02");

  const todo01P03 = new Todo("todo-01-p3", "01/01/2022", "normal", "this is my todo 02");

  projectList.push(new Project("project-01", [todo01P01, todo02P01, todo03P01]));
  projectList.push(new Project("project-02", [todo01P02, todo02P02]));
  projectList.push(new Project("project-03", [todo01P03]));
}

console.log(projectList);

populateProjects();
renderProjects(projectList);
