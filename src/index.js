// import stylesheets
import './view/css/style.css';

// import view modules
import home from './view/home';
import footer from './view/footer';
import Project from './controller/project';
import Todo  from './controller/todo';

let projectArr = [];

const main = document.querySelector('#content');

main.insertAdjacentHTML('beforeEnd', '<div class="activeInfo"></div>');
main.insertAdjacentHTML('beforeEnd', footer);

const activeInfo = document.querySelector('.activeInfo');
activeInfo.innerHTML = home;


const project = (pName) => {
  const name = pName;
  let taskArr = [];

  const addTask = (Arr, task) => {
  }

  const deleteTask = () => {

  }

  const setName = (newName) => {
    this.name = newName;
  }

  const getName = () => {
    return this.name;
  }

  return {
    addTask,
    deleteTask,
    setName,
    getName,
    taskArr
  };

}

const task = (tName, tDescription, tDate, tChecked) => {
  const name = tName;
  const description = tDescription;
  const date = tDate;
  const checked = tChecked;

  const setName = (newName) => {
    this.name = newName;
  }

  const getName = () => {
    return this.name;
  }

  const setDescription = (newDescription) => {
    this.description = newDescription;
  }

  const getDescription = () => {
    return this.description;
  }

  const setDate = (newDate) => {
    this.date = newDate;
  }

  const getDate = () => {
    return this.date;
  }

  const changeChecked = () => {
    this.checked = !this.checked;
  }

  const getChecked = () => {
    return this.checked;
  }

  return {
    setName,
    setDescription,
    setDate,
    changeChecked,
    getName,
    getDescription,
    getDate,
    getChecked
  };
}

const render = () => {

}

const saveLocalAndRender = () => {
  localStorage.setItem('LocalTaskArray', JSON.stringify(myLibrary));
  render();
}

const test = () => {
  testarray = [];
  let newProject = new Project('Example', testarray);
  console.log(newproject);
}

test();
