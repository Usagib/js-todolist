
let projectArr = [];

const project = (pName) => {
  const name = pName;
  let taskArr = [];

  const addTask = (task) => {
    taskArr.push(task);
  }

  const deleteTask = (task) => {
    taskArr.delete(array);
  }

  const setName = (newName) => {
    name = newName;
  }

  return {
    addTask,
    deleteTask,
    setName,
    name,
    taskArr
  };

}

const task = (tName, tDescription, tDate, tChecked) => {
  const name = tName;
  const description = tDescription;
  const date = tDate;
  const checked = tChecked;

  const setName = (newName) => {
    name = newName;
  }

  const setDescription = (newDescription) => {
    this.description = newDescription;
  }

  const setDate = (newDate) => {
    this.date = newDate;
  }

  const changeChecked = () => {
    this.checked = !this.checked;
  }


  return {
    setName,
    setDescription,
    description,
    changeChecked,
    name,
    setDescription,
    date,
  };
}

const render = () => {

  const projectToList = () => {
    let i = projectArr.length - 1;
    let projli = document.createElement("li");
    projli.classList.add("list-group-item");
    projli.innerText = projectArr[i].name;
    document.getElementById("projectContainer").appendChild(projli);
    let addTaskBtn = document.createElement("button");
    addTaskBtn.setAttribute("class", "btn btn-success ml-5");
    addTaskBtn.setAttribute("id", "newTaskButton"+i);
    addTaskBtn.innerText = "Add Task";
    projli.appendChild(addTaskBtn);
    let newbtn = document.getElementById('newTaskButton'+i);
    console.log(projectArr[i]);
    newbtn.addEventListener("click", function() {
      let newtask = task('examplename', 'exampledesc', Date.now, false);
      projectArr[i].taskArr.push(task());
      console.log(projectArr[i].taskArr);
    });
  }
  projectToList();

}

const saveLocalAndRender = () => {
  localStorage.setItem('LocalTaskArray', JSON.stringify(myLibrary));
  render();
}

const test = () => {
  let newProject = project('restaurant page');
}

const eventListener = () => {
  document.getElementById('newproject').onclick = () => {
    projectArr.push(project('Example'));
    render();
  };
}

eventListener();
test();
