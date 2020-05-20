// import stylesheets
import './style.css';

let projectArr = [];

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
  let newProject = project('restaurant page');
}

test();
