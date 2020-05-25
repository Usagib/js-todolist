// import stylesheets
import './view/css/style.css';

// import view modules
import home from './view/home';
import footer from './view/footer';

// import controller modules
import Project from './controller/project';
import Todo  from './controller/todo';

let projectList = [];

// project render init
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
  const projectTitle = document.getElementByid('new-project-title').value;
  const newProject = new Project(projectTitle);
  projectList.push(newProject);
}

function addTodo() {

}

function renderProjects(projectList) {
  addProject();
}

function renderTodos(project) {
  
}

const saveLocalAndRender = () => {
  localStorage.setItem('LocalTaskArray', JSON.stringify(myLibrary));
  render();
}

const test = () => {
  let testarray = [];
  let newProject = new Project('Example', testarray);
  console.log(newProject);
  let newTodo = new Todo('Example', Date.now(), 'low', 'exampledesc');
  console.log(newTodo);
}

test();
