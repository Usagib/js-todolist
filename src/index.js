// import stylesheets
import './view/css/style.css';

// import view modules
import home from './view/home';
import footer from './view/footer';

// import controller modules
import Project from './controller/project';
import Todo from './controller/todo';

// import model
import LocalSave from './model/localSave';

const projectList = LocalSave;
let currentProjectIndex = null;

// loads home
const main = document.querySelector('#content');
main.insertAdjacentHTML('beforeEnd', '<div class="activeInfo"></div>');
main.insertAdjacentHTML('beforeEnd', footer);
const activeInfo = document.querySelector('.activeInfo');
activeInfo.innerHTML = home;

// save to local storage
const saveLocal = () => {
  localStorage.setItem('projectList', JSON.stringify(projectList));
}

// add project to projectList, save local and reload
const addProject = () => {
  const projectTitle = document.getElementById('new-project-title').value;
  const newProject = new Project(projectTitle);
  projectList.push(newProject);
  saveLocal();
  location.reload(); // eslint-disable-line no-restricted-globals
}

const editProject = (projectIndex) => {
  const newName = document.getElementById('edit-project-title').value;
  projectList[projectIndex].title = newName;

  saveLocal();
  renderProjects(projectList); // eslint-disable-line no-use-before-define
}

const setProjectModal = (projectIndex) => {
  document.getElementById('edit-project-title').value = projectList[projectIndex].title;
}

// remove project from projectList, save local and render
const removeProject = (project) => {
  projectList.splice(projectList.indexOf(project), 1);
  alert(`${project.title} deleted`); // eslint-disable-line no-alert

  saveLocal();
  location.reload(); // eslint-disable-line no-restricted-globals
}

const removeTodo = (project, todo) => {
  project.todos.splice(project.todos.indexOf(todo), 1);
  alert(`${todo.title} deleted`); // eslint-disable-line no-alert

  saveLocal();
  location.reload(); // eslint-disable-line no-restricted-globals
}

const editTodo = (todoIndex) => {
  const newName = document.getElementById('edit-todo-title').value;
  projectList[currentProjectIndex].todos[todoIndex].title = newName;

  const newDate = document.getElementById('edit-todo-dueDate').value;
  projectList[currentProjectIndex].todos[todoIndex].dueDate = newDate;

  const newPrior = document.getElementById('edit-todo-priority').value;
  projectList[currentProjectIndex].todos[todoIndex].priority = newPrior;

  const newDesc = document.getElementById('edit-todo-description').value;
  projectList[currentProjectIndex].todos[todoIndex].description = newDesc;

  saveLocal();
  renderTodos(projectList[currentProjectIndex]); // eslint-disable-line no-use-before-define
}

const setTodoModal = (todoIndex) => {
  document.getElementById('edit-todo-title').value = projectList[currentProjectIndex].todos[todoIndex].title;
  document.getElementById('edit-todo-dueDate').value = projectList[currentProjectIndex].todos[todoIndex].dueDate;
  document.getElementById('edit-todo-priority').value = projectList[currentProjectIndex].todos[todoIndex].priority;
  document.getElementById('edit-todo-description').value = projectList[currentProjectIndex].todos[todoIndex].description;
}

// add todo to project save local and render
const addTodo = (todoList) => {
  const todoTitle = document.getElementById('new-todo-title').value;
  const todoDueDate = document.getElementById('new-todo-dueDate').value;
  const todoPriority = document.getElementById('new-todo-priority').value;
  const dotoDescription = document.getElementById('new-todo-description').value;
  const todo = new Todo(todoTitle, todoDueDate, todoPriority, dotoDescription);
  todoList.push(todo);

  saveLocal();
  location.reload(); // eslint-disable-line no-restricted-globals
}

// add button actions
const btnAddProject = document.getElementById('addProject');
btnAddProject.onclick = () => { addProject(); };

const btnAddTodo = document.getElementById('addTodo');
btnAddTodo.onclick = () => { addTodo(projectList[currentProjectIndex].todos); };

const btnEditProject = document.getElementById('editProject');
btnEditProject.onclick = () => { editProject(btnEditProject.getAttribute('curr-project-index')); };

const btnEditTodo = document.getElementById('editTodo');
btnEditTodo.onclick = () => { editTodo(btnEditTodo.getAttribute('curr-todo-index')); };

// render todos table
const renderTodos = (project) => {
  currentProjectIndex = projectList.indexOf(project);

  const todoTable = document.getElementById('todo-table');
  todoTable.innerHTML = '';

  project.todos.forEach((todo) => {
    const tableRow = todoTable.insertRow();
    const indexCol = document.createElement('th');

    indexCol.innerHTML = project.todos.indexOf(todo) + 1;
    tableRow.appendChild(indexCol);

    const titleCol = tableRow.insertCell(1);
    titleCol.innerHTML = todo.title;

    const dueDateCol = tableRow.insertCell(2);
    dueDateCol.innerHTML = todo.dueDate;

    const priorityCol = tableRow.insertCell(3);
    priorityCol.innerHTML = todo.priority;
    if (todo.priority === 'low') { priorityCol.setAttribute('class', 'badge badge-success'); }
    if (todo.priority === 'normal') { priorityCol.setAttribute('class', 'badge badge-warning'); }
    if (todo.priority === 'important') { priorityCol.setAttribute('class', 'badge badge-danger'); }

    const descriptionCol = tableRow.insertCell(4);
    descriptionCol.innerHTML = todo.description;

    const editCol = tableRow.insertCell(5);
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm');
    editButton.setAttribute('data-toggle', 'modal');
    editButton.setAttribute('data-target', '#modalEditTodo');
    editButton.onclick = () => {
      setTodoModal(project.todos.indexOf(todo));
      btnEditTodo.setAttribute('curr-todo-index', project.todos.indexOf(todo));
    };
    editCol.appendChild(editButton);

    const removeCol = tableRow.insertCell(6);
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
    removeButton.onclick = () => {
      removeTodo(project, todo);
    };
    removeCol.appendChild(removeButton);
  });
}

// render projectsList to project table
const renderProjects = (projectList) => {
  const projectTable = document.getElementById('project-table');
  projectTable.innerHTML = '';

  projectList.forEach((project) => {
    const tableRow = projectTable.insertRow();

    const indexCol = document.createElement('th');
    indexCol.innerHTML = projectList.indexOf(project) + 1;

    tableRow.appendChild(indexCol);

    const titleCol = tableRow.insertCell(1);
    titleCol.innerHTML = project.title;
    titleCol.style.cursor = 'pointer';
    titleCol.addEventListener('click', () => {
      renderTodos(project);
    });

    const editCol = tableRow.insertCell(2);
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm');
    editButton.setAttribute('data-toggle', 'modal');
    editButton.setAttribute('data-target', '#modalEditProject');
    editButton.onclick = () => {
      setProjectModal(projectList.indexOf(project));
      btnEditProject.setAttribute('curr-project-index', projectList.indexOf(project));
    };
    editCol.appendChild(editButton);

    const deleteCol = tableRow.insertCell(3);
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
    removeButton.onclick = () => { removeProject(project); };
    deleteCol.appendChild(removeButton);
  });

  saveLocal();
}

renderProjects(projectList);
