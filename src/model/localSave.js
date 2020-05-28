import Project from '../controller/project';
import Todo from '../controller/todo';

let localProjectList = []; // eslint-disable-line import/no-mutable-exports

const populateProjects = () => {
  const todo01P01 = new Todo('todo-01-p1', '01/01/2021', 'low', 'this is my todo 01');
  const todo02P01 = new Todo('todo-02-p1', '01/01/2022', 'normal', 'this is my todo 02');
  const todo03P01 = new Todo('todo-03-p1', '01/01/2022', 'important', 'this is my todo 03');

  const todo01P02 = new Todo('todo-01-p2', '01/01/2021', 'low', 'this is my todo 01');
  const todo02P02 = new Todo('todo-02-p2', '01/01/2022', 'normal', 'this is my todo 02');

  const todo01P03 = new Todo('todo-01-p3', '01/01/2022', 'normal', 'this is my todo 02');

  localProjectList.push(new Project('project-01', [todo01P01, todo02P01, todo03P01]));
  localProjectList.push(new Project('project-02', [todo01P02, todo02P02]));
  localProjectList.push(new Project('project-03', [todo01P03]));
}

// store lib in localstorage
if (localStorage.getItem('projectList') === null) {
  populateProjects();
  localStorage.setItem('projectList', JSON.stringify(localProjectList));
} else {
  localProjectList = JSON.parse(localStorage.getItem('projectList'));
}


export default localProjectList;
